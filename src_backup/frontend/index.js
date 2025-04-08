var views = {
    mainView: new UIDrawView(() => {
        if (window.innerWidth > 999) {
            UDSplitView(() => {
                UDNavItem("Send", "upload")
                    .onclick(() => {
                        views.SendView.navigateto()
                    })
                UDNavItem("Receive", "download")
                    .onclick(() => {
                        views.RecieveView.navigateto()
                    })
            }, () => {
                views.SendView.render()
            })
                .title("SimpleShare")
        } else {
            UDTabView([
                {
                    name: "Send",
                    icon: "upload",
                    view: () => {views.SendView.render()}
                },
                {
                    name: "Receive",
                    icon: "download",
                    view: () => {views.RecieveView.render()}
                }
            ])
        }
    }),
    RecieveView: new UIDrawView(() => {
        UDNavView(() => {
            UDInnerPadding(() => {
                UDTextNode("Enter the recieving code given to you by the sender")
            })
        })
            .title("Receive")
    }),
    SendView: new UIDrawView(() => {
        UDNavView(() => {
            UDInnerPadding(() => {
                UDTextNode("To send files, first sign in")
                UDButton("Sign In", "log-in")
            })
        })
            .title("Send")
    })
}


views.mainView.render()