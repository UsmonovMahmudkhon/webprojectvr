
AFRAME.registerComponent('arrange-gallery', {
    init: function () {
        let el = this.el
        let artworks = el.querySelectorAll('.artwork')
        let exit = document.getElementById('exit')
        let next = document.getElementById('next')
        let camera = document.getElementById('camera')
        let half = Math.ceil(artworks.length / 2)
        let artArray = Array.prototype.slice.call(artworks)
        let leftSide = artArray.splice(0, half)
        let rightSide = artArray.splice(-half)
        let xSpacing = 5
        let wallHeight = 4
        
        let roomLenghth = xSpacing * leftSide.length
        let startPosition = (roomLenghth / 2)
        let wallLeft = document.createElement('a-box')
        wallLeft.setAttribute('position', 
                            { x: startPosition, 
                              y: 1.5, 
                              z: -5.2})
        wallLeft.setAttribute('width', roomLenghth + 10) 
        wallLeft.setAttribute('height', wallHeight) 
        wallLeft.setAttribute('depth', 0.1)                 
        el.appendChild(wallLeft)

        let wallRight = document.createElement('a-box')
        wallRight.setAttribute('position', 
        { x: startPosition, 
          y: 1.5, 
          z: 5.2})
          wallRight.setAttribute('width', roomLenghth + 10) 
          wallRight.setAttribute('height', wallHeight) 
          wallRight.setAttribute('depth', 0.1)                 
        el.appendChild(wallRight)

        exit.setAttribute(
            'position', 
            {x: roomLenghth, y: 1.5, z: xSpacing / 2})

        if (next) {
            next.setAttribute(
                'position', 
                {x: roomLenghth, y: 1.5, z: xSpacing / 2 * -1})     
        }

        for (i = 0; i < leftSide.length; i++) {
            leftSide[i].setAttribute('position', 
                                  { x: i * xSpacing, 
                                    y: 1.5, 
                                    z: -5 })
        }
        for (i = 0; i < rightSide.length; i++) {
            rightSide[i].setAttribute('position', 
                                  { x: i * xSpacing, 
                                    y: 1.5, 
                                    z: 5 })
            rightSide[i].setAttribute('rotation', '0 -90 0')
        }

        camera.setAttribute('position', {x: 0, y: 0, z: 8})

    }
});
