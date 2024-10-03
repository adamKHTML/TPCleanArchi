"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const InMemoryStorage_1 = require("./Repositories/InMemoryStorage");
const CartController_1 = require("./Controllers/CartController");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const storage = new InMemoryStorage_1.InMemoryStorage(); // Vous pouvez changer pour LocalStorage
const cartController = new CartController_1.CartController(storage);
app.post('/cart/products', (req, res) => cartController.addProduct(req, res));
app.get('/cart/total', (req, res) => cartController.getTotal(req, res));
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
