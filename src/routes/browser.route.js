import express from "express";
import getHome from "../controllers/get/home.controller.js";
import getContact from "../controllers/get/contact.controller.js";
import postContact from "../controllers/post/contact.controller.js";

const browser = express.Router();

browser.get("/", getHome);
browser.get("/contact", getContact);
browser.post("/contact", postContact);

export default browser;