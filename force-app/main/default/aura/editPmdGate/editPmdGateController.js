({
    init: function(cmp) {
        cmp.find("editor")
            .getConfiguration()
            .then((configuration) => {
                configuration = (configuration || {});
                cmp.set("v.configuration", JSON.parse(configuration));
            });
    }
});