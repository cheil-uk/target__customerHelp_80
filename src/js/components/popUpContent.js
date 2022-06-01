export default class PopUpContent {
  addContent(trackYoubeVideo, cancelYouVideo, target) {

    const trackProgressVideo = trackYoubeVideo
    const cancelProgressVideo = cancelYouVideo
    const trackLink = target.className

    const popupContent= `
            <div class="delivery-popup__dimmed"></div>
            <div class="delivery-popup-wrap">
              <div class="delivery-popup-layer popup">
                 <div class="delivery-popup-inner popup-inner">
                    <button class="close-btn"></button>
                    <div class="Container  Container--mobile-margins">

                       <iframe class="iframe__youtube_video" src="${(trackLink === 'youtube_video_link track_progress') ? trackProgressVideo : cancelProgressVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                    </div>
                 </div>
              </div>
            </div>
        `;

    let deliveryPopup = $("<div class='delivery-popup'></div>");

    document.body.contains(deliveryPopup[0]) || $('body').append(deliveryPopup), popupContent && deliveryPopup.html(popupContent);

    $('.delivery-popup .close-btn').on('click', function(e){
      e.preventDefault();
      $('.delivery-popup').remove();
    });

    $('.delivery-popup #leanr-more-link').on('click', function(e){
      $('.delivery-popup').remove();
    });

  }




}