const colors = [
    'indianred',
    'lightcoral',
    'salmon',
    'darksalmon',
    'lightsalmon',
    'crimson',
    'red',
    'firebrick',
    'darkred',
    'pink',
    'lightpink',
    'hotpink',
    'deeppink',
    'mediumvioletred',
    'palevioletred',
    'orange',
    'coral',
    'tomato',
    'orangered',
    'darkorange',
    'yellow',
    'gold',
    'lightyellow',
    'lemonchiffon',
    'lightgoldenrodyellow',
    'papayawhip',
    'moccasin',
    'peachpuff',
    'palegoldenrod',
    'khaki',
    'darkkhaki',
    'lavender',
    'thistle',
    'plum',
    'violet',
    'orchid',
    'fuchsia',
    'magenta',
    'mediumorchid',
    'mediumpurple',
    'rebeccapurple',
    'blueviolet',
    'darkviolet',
    'darkorchid',
    'darkmagenta',
    'purple',
    'indigo',
    'slateblue',
    'darkslateblue',
    'green',
    'greenyellow',
    'chartreuse',
    'lawngreen',
    'lime',
    'limegreen',
    'palegreen',
    'lightgreen',
    'mediumspringgreen',
    'springgreen',
    'mediumseagreen',
    'seagreen',
    'forestgreen',
    'darkgreen',
    'yellowgreen',
    'olivedrab',
    'olive',
    'darkolivegreen',
    'mediumaquamarine',
    'darkseagreen',
    'lightseagreen',
    'darkcyan',
    'teal',
    'aqua',
    'cyan',
    'lightcyan',
    'paleturquoise',
    'aquamarine',
    'turquoise',
    'mediumturquoise',
    'darkturquoise',
    'cadetblue',
    'steelblue',
    'lightsteelblue',
    'powderblue',
    'lightblue',
    'skyblue',
    'lightskyblue',
    'deepskyblue',
    'dodgerblue',
    'cornflowerblue',
    'mediumslateblue',
    'royalblue',
    'blue',
    'mediumblue',
    'darkblue',
    'navy',
    'midnightblue',
    'brown',
    'cornsilk',
    'blanchedalmond',
    'bisque',
    'navajowhite',
    'wheat',
    'burlywood',
    'tan',
    'rosybrown',
    'sandybrown',
    'goldenrod',
    'darkgoldenrod',
    'peru',
    'chocolate',
    'saddlebrown',
    'sienna',
    'maroon',
    'white',
    'snow',
    'honeydew',
    'mintcream',
    'azure',
    'aliceblue',
    'ghostwhite',
    'whitesmoke',
    'seashell',
    'beige',
    'oldlace',
    'floralwhite',
    'ivory',
    'antiquewhite',
    'linen',
    'lavenderblush',
    'mistyrose',
    'gainsboro',
    'lightgray',
    'silver',
    'darkgray',
    'gray',
    'dimgray',
    'lightslategray',
    'slategray',
    'darkslategray',
    'black',
  ]

export function generateClasses(){
    var body = document.querySelector("body")
    var style = document.createElement("style")
    var i =0
    var str=""
    while(i<colors.length){
        str = str + "."+colors[i] + "{\nbackground:" + colors[i]+";\n}\n"
        i++
    }
    style.innerHTML = str
    body.appendChild(style)
}

export function generateColdShades(){
    
    var body = document.querySelector("body")
    var regex = /\b.*(?:aqua|blue|turquoise|green|cyan|navy|purple).*\b/g
    var i =0
    while(i<colors.length){
        if(colors[i].match(regex)){
            var div = document.createElement("div")
            div.classList.add(colors[i]);
            div.innerHTML = colors[i]
            body.appendChild(div)
        }
        i++
    }
}

export function choseShade(color){
    var divs = document.querySelectorAll("div")
    var i=0
    while(i<divs.length){
        divs[i].className = color
        i++
    }

}