import app = require("teem");
import Usuario = require("../../models/usuario");
import Curso = require("../../models/curso");

class UsuarioApiRoute {

	public static async buscar(req: app.Request, res: app.Response) {
		const u = await Usuario.cookie(req, res, true);
		if (!u)
			return;

		res.json(await Curso.buscar(parseInt(req.query["id"] as string), parseInt(req.query["ano"] as string)));
	}

}

export = UsuarioApiRoute;
