/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ovly/fiori_14/cadastro_de_alunos/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});