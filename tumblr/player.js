(function(){
    var $bodyText = $(".body-text");
    var audioTemplate = '<audio src="{music_src}" preload="none" controls></audio>';

    $bodyText.each(function(){
        var $this = $(this);
        var textContent = $this.text();
        var musicURL = textContent.match(/http:\/\/*.+.mp3/);
        var appendHTML = audioTemplate.replace("{music_src}", musicURL);

        $this.prepend(appendHTML);
    });
})();