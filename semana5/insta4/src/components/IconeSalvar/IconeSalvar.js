import React from 'react'

export function IconeSalvar(props) {
	return <div className={'icon-container-save'}>
			<img alt={'Icone Salvar'} src={props.iconeparasalvar} onClick={props.onClickSalvar}/>
		</div>
}