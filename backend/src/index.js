let express = require("express");
let app = express();
let mongoose = require("mongoose");
let cors = require("cors");
require("dotenv").config();
let z = require("zod");
let User = require("./Schema/user");

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB connected successfully"))
    .catch((err) => console.log("DB connection error: " + err));

app.post("/api/leads", async (req, res) => {
    let validate = z.object({
        name: z.string().min(3).max(255),
        phone: z.string().length(10),
        email: z.string().email(),
        service: z.string(),
        message: z.string()
    });
    let result = validate.safeParse(req.body);
    if (!result.success) {
        res.status(400).json({
            success: false,
            message: "Invalid data"
        });
    }
    else {
        let data = result.data;
        let user = new User(data);
        await user.save().then(() => {
            res.status(200).json({
                success: true,
                message: "User data saved successfully"
            });
        }).catch((err) => {
            res.status(500).json({
                success: false,
                message: "Error while saving user data"
            });
            console.log(err);
        });
    }

});

app.get("/api/leads", async (req, res) => {
    let filter = req.query.filter;
    let query = {};
    if (filter && filter !== "all") {
        query.service = filter;
    }
    await User.find(query).then((data) => {
        res.status(200).json({
            success: true,
            message: "User data fetched successfully",
            data
        });
    }).catch((err) => {
        res.status(500).json({
            success: false,
            message: "Error while fetching user data"
        });
    });
});

app.put("/api/leads/:id", async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body).then((data) => {
        res.status(200).json({
            success: true,
            message: "User data updated successfully",
            data
        });
    }).catch((err) => {
        res.status(500).json({
            success: false,
            message: "Error while updating user data"
        });
    });
});

app.delete("/api/leads/:id", async (req, res) => {
    await User.findByIdAndDelete(req.params.id).then((data) => {
        res.status(200).json({
            success: true,
            message: "User data deleted successfully",
            data
        });
    }).catch((err) => {
        res.status(500).json({
            success: false,
            message: "Error while deleting user data"
        });
    });
});

app.get("/", (req, res) => {
    res.send("Connected to the backend root");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started on port " + process.env.PORT);
});