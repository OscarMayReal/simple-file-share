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
                UDNavItem("test", "file")
                    .onclick(() => {
                        views.mainView.navigateto()
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
                UDCustomHTML(`
                    <div style="color: red; font-family: sans-serif">Hello World</div>    
                `)
            })
        })
            .title("Send")
    })
}


views.mainView.render()