'use strict';

const sha256 = require('crypto-js/sha256');
const jwt = require('jsonwebtoken');
const User = require('./model');
const Config = require('../config/env');
const TokenExpiredError = jwt.TokenExpiredError;

module.exports.signUp = async (req, res) => {
	const user = new User(req.body);
	user.password = sha256(user.password);

	try {
		await user.save();
		res.send({ user });
	} catch (err) {
		res.sendStatus(400);
	}
};

module.exports.signIn = async (req, res) => {
	let { password, email } = req.body;
	password = sha256(password).toString();

	try {
		const user = await User.findOne({ email, password, active: true });
		const token = jwt.sign(user.toJSON(), Config.token.secret, { expiresIn: '30m' });
		res.send({ token });
	} catch (err) {
		res.sendStatus(400);
	}
};

module.exports.getById = async (req, res) => {
	let id = req.params.id;

	try {
		jwt.verify(req.token, Config.token.secret);
		res.send(await User.findOne({ _id: id, active: true }));
	} catch (err) {
		if (err instanceof TokenExpiredError) {
			res.status(401).send({ message: 'Invalid Session' });
		} else {
			res.sendStatus(401);
		}
	}
};

module.exports.update = async (req, res) => {
	let id = req.params.id;

	try {
		jwt.verify(req.token, Config.token.secret);
		res.send(await User.findOne({ _id: id }));
	} catch (err) {
		if (err instanceof TokenExpiredError) {
			res.status(401).send({ message: 'Invalid Session' });
		} else {
			res.sendStatus(401);
		}
	}
};

module.exports.delete = async (req, res) => {
	let id = req.params.id;

	try {
		jwt.verify(req.token, Config.token.secret);
		res.send(await User.findOne({ _id: id }));
	} catch (err) {
		if (err instanceof TokenExpiredError) {
			res.status(401).send({ message: 'Invalid Session' });
		} else {
			res.sendStatus(401);
		}
	}
};
