
const express = require('express');
const router = express.Router();
const profileController = require('../controller/profileControl');

// Liveness endpoint
router.get('/health', (req, res) => {
	res.status(200).json({ status: 'ok' });
});

/**
 * @swagger
 * components:
 *   schemas:
 *     Profile:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - education
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the profile
 *         name:
 *           type: string
 *           description: The user's name
 *         email:
 *           type: string
 *           description: The user's email
 *         education:
 *           type: string
 *           description: The user's education
 *         skills:
 *           type: array
 *           items:
 *             type: string
 *           description: List of skills
 *         projects:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               links:
 *                 type: array
 *                 items:
 *                   type: string
 *           description: List of projects
 *         work:
 *           type: array
 *           items:
 *             type: string
 *           description: List of work experiences
 *         links:
 *           type: object
 *           properties:
 *             github:
 *               type: string
 *             linkedin:
 *               type: string
 *             portfolio:
 *               type: string
 *           description: Social and portfolio links
 *       example:
 *         name: John Doe
 *         email: john.doe@example.com
 *         education: B.Tech in Computer Science
 *         skills: ["JavaScript", "Node.js", "MongoDB"]
 *         projects:
 *           - title: Portfolio Website
 *             description: A personal website to showcase my work.
 *             links: ["https://github.com/johndoe/portfolio", "https://johndoe.com"]
 *           - title: API Playground
 *             description: A REST API for managing profiles.
 *             links: ["https://github.com/johndoe/api-playground"]
 *         work: ["Software Engineer at ABC Corp", "Intern at XYZ Ltd"]
 *         links:
 *           github: https://github.com/johndoe
 *           linkedin: https://linkedin.com/in/johndoe
 *           portfolio: https://johndoe.com
 */

/**
 * @swagger
 * tags:
 *   name: Profiles
 *   description: The profiles managing API
 */

/**
 * @swagger
 * /profiles:
 *   get:
 *     summary: Returns the list of all profiles
 *     tags: [Profiles]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: The page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: The number of profiles per page
 *       - in: query
 *         name: skills
 *         schema:
 *           type: string
 *         description: Skill to search for (case-insensitive, partial match)
 *     responses:
 *       200:
 *         description: The list of the profiles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Profile'
 */
router.get('/', profileController.getAllProfile);

/**
 * @swagger
 * /profiles/{id}:
 *   get:
 *     summary: Get the profile by id
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The profile id
 *     responses:
 *       200:
 *         description: The profile description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *       404:
 *         description: The profile was not found
 */
router.get('/:id', profileController.getProfileById);

/**
 * @swagger
 * /profiles:
 *   post:
 *     summary: Create a new profile
 *     tags: [Profiles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Profile'
 *     responses:
 *       201:
 *         description: The profile was created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *       500:
 *         description: Some server error
 */
router.post('/', profileController.createProfile);

/**
 * @swagger
 * /profiles/{id}:
 *   put:
 *     summary: Update the profile by the id
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The profile id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Profile'
 *     responses:
 *       200:
 *         description: The profile is updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *       404:
 *         description: The profile was not found
 *       500:
 *         description: Some error happened
 */
router.put('/:id', profileController.updateProfile);

/**
 * @swagger
 * /profiles/{id}:
 *   delete:
 *     summary: Remove the profile by id
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The profile id
 *     responses:
 *       200:
 *         description: The profile was deleted
 *       404:
 *         description: The profile was not found
 */
router.delete('/:id', profileController.deleteProfile);

module.exports = router;
