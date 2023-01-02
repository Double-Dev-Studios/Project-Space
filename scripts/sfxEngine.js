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

// esta es la buena:

function useSFX(sfx) {
	sfx.currentTime = 0;
	sfx.play();
}
