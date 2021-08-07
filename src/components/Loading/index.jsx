import React from 'react'
import { LoadingContainer, LoadingContent } from './styles'
import Spinner from 'react-spinkit';

function Loading() {
    return (
        <LoadingContainer>
            <LoadingContent>
                <img 
                    src="https://logodownload.org/wp-content/uploads/2019/08/slack-logo-1.png"
                    alt="login" 
                />
                <Spinner
                    name="ball-pulse-sync"
                    color="purple"
                    fadeIn="none"
                />
            </LoadingContent>
        </LoadingContainer>
    )
}

export default Loading
