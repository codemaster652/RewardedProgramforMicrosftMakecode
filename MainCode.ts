function Move (Direction: number) {
    if (Direction == 1) {
        Male.y += Speed
    } else if (Direction == 2) {
        Male.y += 0 - Speed
    } else if (Direction == 3) {
        Male.x += Speed
    } else if (Direction == 4) {
        Male.x += 0 - Speed
    }
}
let Chosen = 0
let Total = 0
let ChosenDirection = 0
let Speed = 0
let Male: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
Male = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(Male)
let Health = 100
let Curiosity = 15
Speed = 1
let Up = 1
let Down = 1
let Left = 1
let Right = 1
forever(function () {
    if (randint(0, 100) <= Curiosity) {
        ChosenDirection = randint(1, 4)
        Move(ChosenDirection)
    } else {
        Total = Down + (Left + (Right + Up))
        Chosen = randint(0, Total)
        if (Chosen <= Down) {
            ChosenDirection = 1
            Move(1)
        } else if (Chosen > Down && Chosen <= Down + Left) {
            ChosenDirection = 4
            Move(4)
        } else if (Chosen > Down + Left && Chosen <= Down + Left + Right) {
            ChosenDirection = 3
            Move(3)
        } else if (Chosen < Down + Left + Right) {
            ChosenDirection = 2
            Move(2)
        }
    }
    if (Male.tileKindAt(TileDirection.Center, assets.tile`Fire`)) {
        if (ChosenDirection == 1) {
            Down += 0.5
        } else if (ChosenDirection == 2) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        }
    }
    pause(100)
})
