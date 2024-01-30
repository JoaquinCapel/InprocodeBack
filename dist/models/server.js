"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const producto_routes_1 = __importDefault(require("../routes/producto.routes"));
const fullcalendar_routes_1 = __importDefault(require("../routes/fullcalendar.routes"));
const mapa_routes_1 = __importDefault(require("../routes/mapa.routes"));
const charts_routes_1 = __importDefault(require("../routes/charts.routes"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.middlewares();
        this.routes();
        this.dbConnection();
        this.listen();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicación funcionando en el puerto ${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'API working!'
            });
        });
        this.app.use('/api/productos', producto_routes_1.default);
        this.app.use('/api/fullcalendar', fullcalendar_routes_1.default);
        this.app.use('/api/map', mapa_routes_1.default);
        this.app.use('/api/chart', charts_routes_1.default);
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Base de datos conectada');
            }
            catch (error) {
                console.log(error);
                console.log('Error al conectar la bases de datos');
            }
        });
    }
}
exports.default = Server;
