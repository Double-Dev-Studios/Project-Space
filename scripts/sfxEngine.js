function useExplosionSFX() {
	if (sprShieldString !== "sprShield0"){
		sfxExplosion.currentTime = 0;
		sfxExplosion.play();
	}
}

function useHitSFX() {
	if (contadorShield <= 0) {
		sfxHit.currentTime = 0;
		sfxHit.play();
	}
}

function useSelectSFX() {
	sfxSelect.currentTime = 0;
	sfxSelect.play();
}

function useShieldSFX() {
	sfxShield.currentTime = 0;
	sfxShield.play();
}

function useShootSFX() {
	sfxShoot.currentTime = 0;
	sfxShoot.play();
}

function useShootSFX2() {
	sfxShoot2.currentTime = 0;
	sfxShoot2.play();
}
