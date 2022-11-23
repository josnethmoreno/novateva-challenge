import './Form.css'

function Form() {
	return (
		<form className='Form'>
			<div className='container'>
				<div className='form-control'>
					<label className='Form-label'>
						<span>Nombre</span>
						<input type='text' placeholder='Person' />
					</label>
				</div>
        <div className="form-control">
          <label>
            <span className='Form-label textarea'>Descripcion</span>
            <textarea className='Form-textarea' placeholder='Tabla usada para X y Z'></textarea>
          </label>
        </div>
			</div>
		</form>
	)
}

export default Form
