const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();
app.use(express.json());
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dbPath = path.join(__dirname, "goodreads.db");
let db = null;
const initializeDBAndServer = async () => {
    try {
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database,
        });
        app.listen((3000), () => console.log("Server is running at http://localhost:3000"));
    }
    catch (e) {
        console.log(`DB Error:${e.message}`);
        process.exit(1);
    }
};
initializeDBAndServer();

app.get('/books/', async (req, res) => {
    let jwtToken;
    const authHeader = req.headers["authorization"];
    if (authHeader !== undefined) {
        jwtToken = authHeader.split(" ")[1];
    }
    if (jwtToken === undefined) {
        res.status(401);
        res.send("Invalid Access Token");
    }
    else {
        jwt.verify(jwtToken, "tcjytcurkt", async (error, payload) => {
            if (error) {
                res.status(401);
                res.send("Invalid Access Token");
            }
            else {
                const getBooksQuery = `
                SELECT
                 *
                FROM
                book
                ORDER
                BY
                book_id;`;
                const booksArray = await db.all(getBooksQuery);
                res.send(booksArray);
            }
        })
    }

});

// Add Book API
app.post("/books/", async (req, res) => {
    const bookDetails = req.body;
    const {
        title,
        authorId,
        rating,
        ratingCount,
        reviewCount,
        description,
        pages,
        dateOfPublication,
        editionLanguage,
        price,
        onlineStores,
    } = bookDetails;
    const addBookQuery = `
INSERT INTO
book (title,author_id,rating,rating_count,review_count,description,pages,date_of_publication,edition_language,price,online_stores)
VALUES
(
    '${title}',
    ${authorId},
    ${rating},
    ${ratingCount},
    ${reviewCount},
    '${description}',
    ${pages},
    '${dateOfPublication}',
    '${editionLanguage}',
    ${price},
    '${onlineStores}'
);
`;

    const dbResponse = await db.run(addBookQuery);
    const bookId = dbResponse.lastID;
    res.send({ bookId: bookId });
});
// Create User API
// Create User API
app.post("/users/", async (req, res) => {
    try {
        const { username, name, password, gender, location } = req.body;

        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // check if username already exists
        const selectUserQuery = `
      SELECT * FROM user WHERE username='${username}';
    `;
        const dbUser = await db.get(selectUserQuery);

        if (dbUser === undefined) {
            const createUserQuery = `
        INSERT INTO user (username, name, password, gender, location)
        VALUES (
        '${username}',
        '${name}',
        '${hashedPassword}',
        '${gender}',
        '${location}'
        );
    `;
            await db.run(createUserQuery);
            res.send("User created successfully");
        } else {
            res.status(400);
            res.send("Username already exist");
        }
    } catch (error) {
        console.log("Error:", error);
        res.status(500).send("Internal server error");
    }
});

// Login API
app.post("/login/", async (req, res) => {
    const { username, password } = req.body;
    const selectUserQuery = `
      SELECT * FROM user WHERE username='${username}';
    `;
    const dbUser = await db.get(selectUserQuery);

    if (dbUser === undefined) {
        res.status(404);
        res.send("Invalid User");
    }
    else {
        const isPasswordMatched = await bcrypt.compare(password, dbUser.password)
        if (isPasswordMatched === true) {
            const payload = { username: username };
            const jwtToken = jwt.sign(payload, "tcjytcurkt");
            res.send({ jwtToken });
        }
        else {
            res.status(404);
            res.send("Invalid Password");
        }
    }
})

