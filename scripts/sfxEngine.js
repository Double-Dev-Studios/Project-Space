function useExplosion() {
	if (sprShieldString !== "sprShield0"){
		sfxExplosion.currentTime = 0;
		sfxExplosion.play();
	}
}

function useHit() {
	if (contadorShield <= 0) {
		sfxHit.currentTime = 0;
		sfxHit.play();
	}
}

function useSelect() {
	sfxSelect.currentTime = 0;
	sfxSelect.play();
}

function useShield() {
	sfxShield.currentTime = 0;
	sfxShield.play();
}

function useShoot() {
	sfxShoot.currentTime = 0;
	sfxShoot.play();
}

function useShoot2() {
	sfxShoot2.currentTime = 0;
	sfxShoot2.play();
}


