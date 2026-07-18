import express from "express";

const app = express();

const PORT = 3000;

app.get("/health", (req, res) => {
    res.status(200).json({
        name: "businessFlow AI",
        version: "1.0.0",
        status: "running",
    });
});

app.listen(PORT, () => {
    console.log("BusinessFlow AI server is running")
})