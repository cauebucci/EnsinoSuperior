import app = require("teem");
import Usuario = require("../../models/usuario");
import Faculdade = require("../../models/faculdade");

class UsuarioApiRoute {

	public static async listar(req: app.Request, res: app.Response) {
		const u = await Usuario.cookie(req, res, true);
		if (!u)
			return;

		res.json(await Faculdade.listar());
	}

    public static async obterFaculdades(req: app.Request, res: app.Response) {
		const u = await Usuario.cookie(req, res, true);
		if (!u)
			return;

		res.json(await Faculdade.obterFaculdades());
	}

	public static async filtrar(req: app.Request, res: app.Response) {
		const u = await Usuario.cookie(req, res);
		if (!u)
			return;

		const estado = parseInt(req.query["estado"] as string);
		const usuario = parseInt(req.query["usuario"] as string);
		let de = req.query["de"] as string;
		let ate = req.query["ate"] as string;
		
		res.json(await Faculdade.filtrar(req.query["estado"] as string, req.query["cidade"] as string, req.query["curso"] as string));
	} 

	public static async buscar(req: app.Request, res: app.Response) {
		const u = await Usuario.cookie(req, res, true);
		if (!u)
			return;

		res.json(await Faculdade.buscar(parseInt(req.query["id"] as string)));
	}

}

export = UsuarioApiRoute;
