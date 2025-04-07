var mainview = new UIDrawView(() => {
    UDNavView(() => {
        UDInnerPadding(() => {
            UDTextNode("This is a simple project created with create-spark-app")
            UDTextNode("You can find out more information about Spark and UiDraw at the link below")
            UDButton("Github", "github")
                .color("black")
                .onclick(() => {
                    window.location.assign("https://www.github.com/oscarmayreal/UIDraw")
            })
        })
    })
    .title("Welcome to Spark Framework")
})
mainview.render()