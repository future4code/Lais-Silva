import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {


  const  [ like, setLike ] = useState(false)

  const  [ numberOfLikes, setnumberOfLikes ] = useState(0)
  
  const  [ sendComment, setSendComment ] = useState(false)

  const  [ numberOfComments, setNumberOfComments ] = useState(0)
  
  const  [ allComents, setAllComments ] = useState([])

  const onClickCurtida = () => {
    if (like) {
      setLike(false)
      setnumberOfLikes(0)
    } else {
      setLike(true)
      setnumberOfLikes(1)
    }
  };

  const onClickComentario = () => {
    setSendComment(!sendComment)
  };

  const enviarComentario = (comentario) => {
    setNumberOfComments(numberOfComments + 1)
    const newListOfComments = [ ...allComents, comentario ]
    setSendComment(false)
    setAllComments(newListOfComments)
  }
  
  const iconeCurtida = like ? (iconeCoracaoPreto) : (iconeCoracaoBranco)
  
  const commentSection = sendComment ? (<SecaoComentario enviarComentario={enviarComentario} />) :
      (
      allComents.map(comentario => { 
        return (
          <CommentContainer>
            <p>{comentario}</p>
          </CommentContainer>
        )
      })
      )
   
  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numberOfLikes}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numberOfComments}
        />
      </PostFooter>
      {commentSection}
    </PostContainer>
  )
}

export default Post