export default function hasAdblocker() {
	let fakeAd;
	if (document.getElementsByClassName('textads').length == 0) {

		fakeAd = document.createElement("div");
		fakeAd.className =
			"textads banner-ads banner_ads ad-unit ad-zone ad-space adsbox"

		fakeAd.style.height = "1px"

		document.body.appendChild(fakeAd)

	} else {
		fakeAd = document.getElementsByClassName('textads')[0];
	}

	let x_width = fakeAd.offsetHeight;
	if (x_width) return false;
	return true;
}
