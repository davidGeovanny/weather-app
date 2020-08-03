import React from "react";

export const NoFound = () => {
	return (
		<div className="jumbotron jumbotron-fluid text-center">
			<div className="container">
				<h2 className="display-4">Sin resultados</h2>
				<p className="lead">
					No se han encontrado resultados para la ciudad indicada
				</p>
			</div>
		</div>
	);
};
