import './Atributos.css'

function Atributos() {
	return (
		<div className='Atributos'>
			<div className='container'>
				<h2>Atributos</h2>
				<table className='Atributos-table'>
					<tr>
						<th>Nombre</th>
						<th>Tipo</th>
						<th>Descripcion</th>
						<th>Constrains</th>
						<th>Delete</th>
					</tr>
					<tr>
						<td>ID</td>
						<td>
							<select>
								<option value='Decimal'>Decimal</option>
								<option value=''></option>
								<option value=''></option>
							</select>
						</td>
						<td>Atributo para X y Z</td>
						<td>
							<div className='Atributos-table-options'>
								<div>
									<input type='checkbox' name='' id='' data-content='PY TRUE' />
									<input type='checkbox' name='' id='' data-content='PY TRUE' />
									<input type='checkbox' name='' id='' data-content='PY TRUE' />
									<input type='checkbox' name='' id='' data-content='PY TRUE' />
									<input type='checkbox' name='' id='' data-content='PY TRUE' />
									<input type='checkbox' name='' id='' data-content='PY TRUE' />
									<input type='checkbox' name='' id='' data-content='PY TRUE' />
								</div>
								<div>
									<button>+</button>
								</div>
							</div>
						</td>
						<td>Delete</td>
					</tr>
					<tr>
						<td>Celular</td>
						<td>
							<select>
								<option value='Decimal'>Char</option>
								<option value=''></option>
								<option value=''></option>
							</select>
						</td>
						<td>Atributo para X y Z</td>
						<td>
							<div className='Atributos-table-options dos'>
								<button>+</button>
							</div>
						</td>
						<td>Delete</td>
					</tr>
				</table>
				<div className='Atributos-table-btn-container'>
					<button className='Button outline'>Agregar +</button>
				</div>
			</div>
		</div>
	)
}

export default Atributos
