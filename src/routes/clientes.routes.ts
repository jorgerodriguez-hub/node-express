import { Router } from "express";

import * as clientCtrl from "./clientes.controller";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Cliente:
 *          type: object
 *          properties:
 *              nombre:
 *                  type: string
 *                  description: nombres completos
 *              apellido:
 *                  type: string
 *                  description: apellidos completos
 *              edad:
 *                  type: string
 *                  description: edad actual
 *              fecha_nacimiento:
 *                  type: string
 *                  description: fecha de nacimiento
 *          required:
 *              - nombre
 *              - apellido
 *              - edad
 *              - fecha_nacimiento
 *          example:
 *              nombre: Lionel
 *              apellido: Messi
 *              edad: "35"
 *              fecha_nacimiento: 24/06/1987
 *
 * @openapi
 * /api/crearclientes:
 *   post:
 *     summary: crear nuevo cliente
 *     tags: [Cliente]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/Cliente'
 *     responses:
 *       200:
 *         description: OK Nuevo cliente creado!
 *
 * @openapi
 * /api/clientes:
 *   get:
 *     summary: listado de clientes
 *     tags: [Cliente]
 *     responses:
 *       200:
 *         description: OK Listado de clientes!
 */
router.get("/api/clientes", clientCtrl.listClients);

router.post("/api/crearclientes", clientCtrl.createClient);

export default router;
