$("#do-the-generate").click(function(){
    let val = 1
    val = Math.floor(Math.random() * 23) + 1

    switch (val){
        case 1:
            $("#message").html("Anton")
            break
        case 2:
            $("#message").html("Ali")
            break
        case 3:
            $("#message").html("Avraz")
            break
        case 4:
            $("#message").html("Boris")
            break
        case 5:
            $("#message").html("Catalina")
            break
        case 6:
            $("#message").html("Charbel")
            break
        case 7:
            $("#message").html("Dave")
            break
        case 8:
            $("#message").html("Jacqueline")
            break
        case 9:
            $("#message").html("Jan")
            break
        case 10:
            $("#message").html("Katharina")
            break
        case 11:
            $("#message").html("Lina")
            break
        case 12:
            $("#message").html("Lukasz")
            break
        case 13:
            $("#message").html("Manuel")
            break
        case 14:
            $("#message").html("Manuella")
            break
        case 15:
            $("#message").html("Marie")
            break
        case 16:
            $("#message").html("Metin")
            break
        case 17:
            $("#message").html("Mohammed (Hamode)")
            break
        case 18:
            $("#message").html("Muhammed (MoMo)")
            break
        case 19:
            $("#message").html("Nancy")
            break
        case 20:
            $("#message").html("Onur")
            break
        case 21:
            $("#message").html("Osmel")
            break
        case 22:
            $("#message").html("Rocco")
            break
        case 23:
            $("#message").html("Youssef")
            break
        default:
            $("#message").html("Do it again!")
            break
}
})