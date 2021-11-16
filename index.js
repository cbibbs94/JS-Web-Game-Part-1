// // Code for link sprite
// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// // code for the tree sprite
// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)


function newImage(name, assets, left, bottom) {
    name = document.createElement('img')
    name.src = assets
    name.style.position = 'fixed'
    name.style.left = left
    name.style.bottom = bottom
    document.body.append(name)
    return name
}

newImage('greenCharacter', 'assets/green-character.gif','100px', '100px')

newImage('pineTree', 'assets/pine-tree.png', '450px', '200px')

newImage('tree', '/assets/tree.png', '200px', '300px')

newImage('pillar', '/assets/pillar.png', '350px', '100px')

newImage('crate', 'assets/crate.png', '150px', '200px')

newImage('well', 'assets/well.png', '500px', '425px')




function newItem(name, assets, left, bottom) {
    name = document.createElement('img')
    name.src = assets
    name.style.position = 'fixed'
    name.style.left = left
    name.style.bottom = bottom
    document.body.append(name)
    
    name.addEventListener('dblclick', function(){
        name.remove()
    })
}


newItem('Sword', '/assets/sword.png', '500px', '405px')

newItem('Shield', '/assets/sheild.png', '165px', '185px' )

newItem('Staff', '/assets/staff.png', '600px', '100px')