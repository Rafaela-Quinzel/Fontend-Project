import React from 'react'
import * as S from './styled'



function MusicsCard(props) {

    return (
        <S.SnackBar onClick={props.open}>
            <S.TextCard>{props.music.title}</S.TextCard>
            <S.TitleCard>{props.music.author}</S.TitleCard>
        </S.SnackBar>
    )
  
}
export default MusicsCard