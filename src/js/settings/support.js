($ => {
    "use strict";

    $.SupportHelper = function (s) {

        /**
         * Initialises the contribution tab
         *
         * @returns {Promise}
         */
        this.init = async () => {
            initEvents();
        };

        /**
         * Initialises the eventhandler for the contribution tab
         *
         * @returns {Promise}
         */
        let initEvents = async () => {
            chrome.storage.sync.get(["shareInfo"], (obj) => {
                if (obj.shareInfo) {
                    if (obj.shareInfo.config) {
                        s.elm.checkbox.shareConfig.trigger("click");
                    }

                    if (obj.shareInfo.activity) {
                        s.elm.checkbox.shareActivity.trigger("click");
                    }
                }

                s.elm.support.shareInfoWrapper.find("input[type='checkbox']").on("change", () => {
                    chrome.storage.sync.set({
                        shareInfo: {
                            config: s.helper.checkbox.isChecked(s.elm.checkbox.shareConfig),
                            activity: s.helper.checkbox.isChecked(s.elm.checkbox.shareActivity)
                        }
                    }, () => {
                        s.showSuccessMessage("saved_share_userdata");
                    });
                });
            });

            s.elm.support.donate.on("click", (e) => {
                e.preventDefault();
                window.open($.opts.donateLink, "_blank");
            });
        };
    };

})(jsu);