var views = {
    mainView: new UIDrawView(() => {
        UDTabView([
            {
                name: "Send",
                icon: "upload",
                view: () => {UDTextNode("Send")}
            },
            {
                name: "Receive",
                icon: "download",
                view: () => {views.recieveView.render()}
            }
        ])
    }),
    recieveView: new UIDrawView(() => {
        UDNavView(() => {
            UDInnerPadding(() => {
                UDTextNode("Enter the recieving code given to you by the sender")
            })
        })
            .title("Receive")
    })
}


views.mainView.render()