import React, { Component } from 'react'
import Cropper from 'react-cropper'
import styled from 'styled-components'
import 'cropperjs/dist/cropper.css'

const Frame = styled.div`
  height: 400px;
  width: 400px;
  margin: 0 auto;
  border: 1px solid #979797;
`

class EditImage extends Component {

  render() {
    const {className, viewMode, scale} = this.props

    return (
      <div className={className}>
        <Frame>
            <Cropper
              key={viewMode}
              ref="cropper"
              style={{ height: 400, width: 400 }}
              aspectRatio={1}
              src={'https://i.imgur.com/fA8tM5R.jpg'}
              zoomOnWheel={false}
              scaleX={scale}
              scaleY={scale}
              autoCrop={true}
              autoCropArea={1}
              minCropBoxWidth={400}
              minCropBoxHeight={400}
              movable={true}
              dragMode={'move'}
              viewMode={viewMode}
              cropBoxMovable={false}
              cropBoxResizable={false}
              background={false}
              highlight={false}
              toggleDragModeOnDblclick={false}
            />
        </Frame>
      </div>
    )
  }
}

export default styled(EditImage)`
  position: relative;
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
