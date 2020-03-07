// C O L I S I O N E S
				//colisiones, cuando hagas un objeto solido, COLISIONES.
				function colisiones(){
					
					// asteroid al tocar borde
					if (asteroid.x <= -72 || asteroid.show == false){
						asteroid.x = canvas.width + 72
						asteroid.y = getRandomInt(40, canvas.height - 40)
						sprAsteroid = sprAsteroidNormal
						sprAsteroidString = "sprAsteroidNormal"
						asteroid.show = true
					}
					
					
					// asteroid 2 al tocar borde
					if (asteroid2.x <= -72 || asteroid2.show == false){
						asteroid2.x = canvas.width + 72
						asteroid2.y = getRandomInt(40, canvas.height - 40)
						sprAsteroid2 = sprAsteroidNormal
						sprAsteroid2String = "sprAsteroidNormal"
						asteroid2.show = true
					}
					
					
					
					
					// miniAsteroid al tocar borde
					if (miniAsteroid.use == true) {
						
						if (miniAsteroid.x <= -72 || miniAsteroid.show == false){
							miniAsteroid.x = canvas.width + (72 * getRandomInt(3, 10))
							miniAsteroid.y = getRandomInt(40, canvas.height - 40)
							sprMiniAsteroid = sprMiniAsteroidNormal
							sprMiniAsteroidString = "sprMiniAsteroidNormal"
							miniAsteroid.show = true
						}
						
					}
					
					
					// fire asteroid al tocar borde
					if (fireAsteroid.use == true){
						
						if (fireAsteroid.x <= -72 || fireAsteroid.show == false){
							fireAsteroid.x = canvas.width + 72
							fireAsteroid.y = getRandomInt(40, canvas.height - 40)
							sprFireAsteroid = sprFireAsteroidNormal
							sprFireAsteroidString = "sprFireAsteroidNormal"
							fireAsteroid.show = true
						}
						
					}
					
					
					
					// ice asteroid al tocar borde
					if (iceAsteroid.use == true){
						
						if (iceAsteroid.x <= -72 || iceAsteroid.show == false){
							iceAsteroid.x = canvas.width + 72
							iceAsteroid.y = getRandomInt(40, canvas.height - 40)
							sprIceAsteroid = sprIceAsteroidNormal
							sprIceAsteroidString = "sprIceAsteroidNormal"
							iceAsteroid.show = true
						}
						
					}
					
					// bigAsteroid al tocar borde
					if (bigAsteroid.x <= -192 || bigAsteroid.show == false){
						bigAsteroid.x = canvas.width + 528
						bigAsteroid.y = getRandomInt(40, canvas.height - 40)
						sprBigAsteroid = sprBigAsteroidNormal
						sprBigAsteroidString = "sprBigAsteroidNormal"
						bigAsteroid.show = true
						randomBigAsteroid()
					}
					
					
					
					// satelite al tocar borde
					if (satelite.x <= -40 * gameScale || satelite.show == false){
						satelite.x = canvas.width + 72
						satelite.y = getRandomInt(0, canvas.height - 164),
						sprSatelite = sprSateliteNormal
						sprSateliteString = "sprSateliteNormal"
						satelite.show = true
					}
					
					
					// sateliteSpecial al tocar borde
					if (sateliteSpecial.x <= -30 * gameScale || sateliteSpecial.show == false){
						sateliteSpecial.x = canvas.width + 72
						sateliteSpecial.y = getRandomInt(0, canvas.height - 164),
						sateliteSpecial.show = true
					}
					
					
					
					
					// ship al tocar borde
					
					if (ship.show == true){
						if (ship.x <= -36 || ship.y <= -36||
							ship.x >= canvas.width - 36 ||
							ship.y >= canvas.height - 36){
								
								
								ship.x = canvas.width / 2
								ship.y = canvas.height / 2
								ship.show = false
								ship.speed = 0
								
								sprShield = sprShield0
								sprShieldString = "sprShield0"
								alert("G A M E   O V E R .")
							}
					}
					
					
					// asteroid al tocar ship
					if (ship.show == true){
						if (asteroid.show == true) {
							if (asteroidDamaged == false) {
								
								if (asteroid.x2 >= shipHitbox.x) {
									if (asteroid.x <= shipHitbox.x2) {
										if (asteroid.y2 >= shipHitbox.y) {
											if (asteroid.y <= shipHitbox.y2) {
												
												asteroidDamage()
												shipDamage()
											}
										}
									}
								}
								
							}
						}
					}
					
					
					
					// asteroid 2 al tocar ship
					
					if (ship.show == true){
						if (asteroid2.show == true) {
							if (asteroid2Damaged == false) {
								
								if (asteroid2.x2 >= shipHitbox.x) {
									if (asteroid2.x <= shipHitbox.x2) {
										if (asteroid2.y2 >= shipHitbox.y) {
											if (asteroid2.y <= shipHitbox.y2) {
												
												asteroid2Damage()
												shipDamage()
											}
										}
									}
								}
								
							}
						}
					}
					
					
					// miniAsteroid al tocar ship
					
					if (ship.show == true){
						if (miniAsteroid.use == true) {
							
							if (miniAsteroid.show == true) {
								if (miniAsteroidDamaged == false) {
									
									if (miniAsteroid.x2 >= shipHitbox.x) {
										if (miniAsteroid.x <= shipHitbox.x2) {
											if (miniAsteroid.y2 >= shipHitbox.y) {
												if (miniAsteroid.y <= shipHitbox.y2) {
													
													miniAsteroidDamage()
													shipDamage()
												}
											}
										}
									}
									
								}
							}
							
						}
					}
					
					
					// fireAsteroid al tocar ship
					
					if (ship.show == true){
						if (fireAsteroid.use == true) {
							
							if (fireAsteroid.show == true) {
								if (fireAsteroidDamaged == false) {
									
									if (fireAsteroid.x2 >= shipHitbox.x) {
										if (fireAsteroid.x <= shipHitbox.x2) {
											if (fireAsteroid.y2 >= shipHitbox.y) {
												if (fireAsteroid.y <= shipHitbox.y2) {
													
													fireAsteroidDamage()
													shipDamage()
													ship.speed = 4.5
												}
											}
										}
									}
									
								}
							}
							
						}
					}
					
					
					// iceAsteroid al tocar ship
					
					if (ship.show == true){
						if (iceAsteroid.use == true) {
							
							if (iceAsteroid.show == true) {
								if (iceAsteroidDamaged == false) {
									
									if (iceAsteroid.x2 >= shipHitbox.x) {
										if (iceAsteroid.x <= shipHitbox.x2) {
											if (iceAsteroid.y2 >= shipHitbox.y) {
												if (iceAsteroid.y <= shipHitbox.y2) {
													
													iceAsteroidDamage()
													shipDamage()
													ship.speed = 0
												}
											}
										}
									}
									
								}
							}
							
						}
					}
					
					
					
					// bigAsteroid al tocar ship
					
					if (ship.show == true){
						if (bigAsteroid.use == true) {
							
							if (bigAsteroid.show == true) {
								if (bigAsteroidDamaged == false) {
									
									if (bigAsteroid.x2 >= shipHitbox.x) {
										if (bigAsteroid.x <= shipHitbox.x2) {
											if (bigAsteroid.y2 >= shipHitbox.y) {
												if (bigAsteroid.y <= shipHitbox.y2) {
													
													bigAsteroidDamage()
													shipDamage()
												}
											}
										}
									}
									
								}
							}
							
						}
					}
					
					
					
					
					// Twister al tocar ship
					
					if (ship.show == true){
						
						if (twister.use == true) {
							if (twister.show == true) {
									
								if (twister.x2 >= shipHitbox.x) {
									if (twister.x <= shipHitbox.x2) {
										if (twister.y2 >= shipHitbox.y) {
											if (twister.y <= shipHitbox.y2) {
												shipDamage()
												ship.speedY = -5
												
											}
										}
									}
								}
							}
						}
					}
					
					
					
					
					// satelite al tocar ship
					
					if (ship.show == true){
						if (satelite.show == true) {
							if (sateliteDamaged == false) {
								
								if (sateliteHitbox.x2 >= shipHitbox.x) {
									if (sateliteHitbox.x <= shipHitbox.x2) {
										if (sateliteHitbox.y2 >= shipHitbox.y) {
											if (sateliteHitbox.y <= shipHitbox.y2) {
												
												sateliteDamage()
												shipDamage()
											}
										}
									}
								}
								
							}
						}
					}
					
					
					
					// sateliteSpecial al tocar ship
					
					if (ship.show == true){
						if (sateliteSpecial.show == true) {
							
							if (sateliteSpecialHitbox.x2 >= shipHitbox.x) {
								if (sateliteSpecialHitbox.x <= shipHitbox.x2) {
									if (sateliteSpecialHitbox.y2 >= shipHitbox.y) {
										if (sateliteSpecialHitbox.y <= shipHitbox.y2) {
											
											sateliteSpecialDamage()
											shipDamage()
										}
									}
								}
							}
						}
					}
					
					
					
					
					// lava al tocar ship
					
					if (ship.show == true){
						if (lava.show == true) {
							
							if (lavaHitbox.x2 >= shipHitbox.x) {
								if (lavaHitbox.x <= shipHitbox.x2) {
									if (lavaHitbox.y2 >= shipHitbox.y) {
										if (lavaHitbox.y <= shipHitbox.y2) {
											
											shipKill()
										}
									}
								}
							}
						}
					}
					
					
					
						
					// asteroid al tocar disparos
							
						//disparo 1
						if (asteroid.show == true) {
							if (disparo.disparado == true) {
									
								if (asteroid.x2 >= disparo.x) {
									if (asteroid.x <= disparo.x2) {
										if (asteroid.y2 >= disparo.y) {
											if (asteroid.y <= disparo.y2) {
												
												disparo.disparado = false
												
												if (asteroidDamaged == false) {
													asteroidDamage()
												}
											}
										}
									}
								}
								
							}
						}
							
						//disparo 2
						if (asteroid.show == true) {
							if (disparo2.disparado == true) {
								
								if (asteroid.x2 >= disparo2.x) {
									if (asteroid.x <= disparo2.x2) {
										if (asteroid.y2 >= disparo2.y) {
											if (asteroid.y <= disparo2.y2) {
												
												disparo2.disparado = false
												
												if (asteroidDamaged == false) {
													asteroidDamage()
												}
											}
										}
									}
								}
								
							}
						}
							
						//disparo 3
						if (asteroid.show == true) {
							if (disparo3.disparado == true) {
								
								if (asteroid.x2 >= disparo3.x) {
									if (asteroid.x <= disparo3.x2) {
										if (asteroid.y2 >= disparo3.y) {
											if (asteroid.y <= disparo3.y2) {
												
												disparo3.disparado = false
												
												if (asteroidDamaged == false) {
													asteroidDamage()
												}
											}
										}
									}
								}
								
							}
						}
						
						
						
						
						// asteroid 2 al tocar disparos
							
						//disparo 1
						if (asteroid2.show == true) {
							if (disparo.disparado == true) {
									
								if (asteroid2.x2 >= disparo.x) {
									if (asteroid2.x <= disparo.x2) {
										if (asteroid2.y2 >= disparo.y) {
											if (asteroid2.y <= disparo.y2) {
												
												disparo.disparado = false
												
												if (asteroid2Damaged == false) {
													asteroid2Damage()
												}
											}
										}
									}
								}
								
							}
						}
							
						//disparo 2
						if (asteroid2.show == true) {
							if (disparo2.disparado == true) {
								
								if (asteroid2.x2 >= disparo2.x) {
									if (asteroid2.x <= disparo2.x2) {
										if (asteroid2.y2 >= disparo2.y) {
											if (asteroid2.y <= disparo2.y2) {
												
												disparo2.disparado = false
												
												if (asteroid2Damaged == false) {
													asteroid2Damage()
												}
											}
										}
									}
								}
								
							}
						}
							
						//disparo 3
						if (asteroid.show == true) {
							if (disparo2.disparado == true) {
								
								if (asteroid2.x2 >= disparo3.x) {
									if (asteroid2.x <= disparo3.x2) {
										if (asteroid2.y2 >= disparo3.y) {
											if (asteroid2.y <= disparo3.y2) {
												
												disparo3.disparado = false
												
												if (asteroid2Damaged == false) {
													asteroid2Damage()
												}
											}
										}
									}
								}
								
							}
						}
						
						
						
						
					
					//miniAsteroid al tocar disparos
						if (miniAsteroid.use == true) {
							
							//disparo 1
							if (miniAsteroid.show == true) {
								if (disparo.disparado == true) {
										
									if (miniAsteroid.x2 >= disparo.x) {
										if (miniAsteroid.x <= disparo.x2) {
											if (miniAsteroid.y2 >= disparo.y) {
												if (miniAsteroid.y <= disparo.y2) {
													
													disparo.disparado = false
													
													if (miniAsteroidDamaged == false) {
														miniAsteroidDamage()
													}
												}
											}
										}
									}
									
								}
							}
								
							//disparo 2
							if (miniAsteroid.show == true) {
								if (disparo2.disparado == true) {
									
									if (miniAsteroid.x2 >= disparo2.x) {
										if (miniAsteroid.x <= disparo2.x2) {
											if (miniAsteroid.y2 >= disparo2.y) {
												if (miniAsteroid.y <= disparo2.y2) {
													
													disparo2.disparado = false
													
													if (miniAsteroidDamaged == false) {
														miniAsteroidDamage()
													}
												}
											}
										}
									}
									
								}
							}
								
							//disparo 3
							if (miniAsteroid.show == true) {
								if (disparo3.disparado == true) {
									
									if (miniAsteroid.x2 >= disparo3.x) {
										if (miniAsteroid.x <= disparo3.x2) {
											if (miniAsteroid.y2 >= disparo3.y) {
												if (miniAsteroid.y <= disparo3.y2) {
													
													disparo3.disparado = false
													
													if (miniAsteroidDamaged == false) {
														miniAsteroidDamage()
													}
												}
											}
										}
									}
									
								}
							}
							
							
						}
						
						
						
						
						
						// fireAsteroid al tocar disparos
							
						//disparo 1
						if (fireAsteroid.show == true) {
							if (disparo.disparado == true) {
									
								if (fireAsteroid.x2 >= disparo.x) {
									if (fireAsteroid.x <= disparo.x2) {
										if (fireAsteroid.y2 >= disparo.y) {
											if (fireAsteroid.y <= disparo.y2) {
												
												disparo.disparado = false
												
												if (fireAsteroidDamaged == false) {
													fireAsteroidDamage()
												}
											}
										}
									}
								}
								
							}
						}
							
						//disparo 2
						if (fireAsteroid.show == true) {
							if (disparo2.disparado == true) {
								
								if (fireAsteroid.x2 >= disparo2.x) {
									if (fireAsteroid.x <= disparo2.x2) {
										if (fireAsteroid.y2 >= disparo2.y) {
											if (fireAsteroid.y <= disparo2.y2) {
												
												disparo2.disparado = false
												
												if (fireAsteroidDamaged == false) {
													fireAsteroidDamage()
												}
											}
										}
									}
								}
								
							}
						}
							
						//disparo 3
						if (fireAsteroid.show == true) {
							if (disparo3.disparado == true) {
								
								if (fireAsteroid.x2 >= disparo3.x) {
									if (fireAsteroid.x <= disparo3.x2) {
										if (fireAsteroid.y2 >= disparo3.y) {
											if (fireAsteroid.y <= disparo3.y2) {
												
												disparo3.disparado = false
												
												if (fireAsteroidDamaged == false) {
													fireAsteroidDamage()
												}
											}
										}
									}
								}
								
							}
						}
						
						
						
						
						// iceAsteroid al tocar disparos
							
						//disparo 1
						if (iceAsteroid.show == true) {
							if (disparo.disparado == true) {
									
								if (iceAsteroid.x2 >= disparo.x) {
									if (iceAsteroid.x <= disparo.x2) {
										if (iceAsteroid.y2 >= disparo.y) {
											if (iceAsteroid.y <= disparo.y2) {
												
												disparo.disparado = false
												
												if (iceAsteroidDamaged == false) {
													iceAsteroidDamage()
												}
											}
										}
									}
								}
								
							}
						}
							
						//disparo 2
						if (iceAsteroid.show == true) {
							if (disparo2.disparado == true) {
								
								if (iceAsteroid.x2 >= disparo2.x) {
									if (iceAsteroid.x <= disparo2.x2) {
										if (iceAsteroid.y2 >= disparo2.y) {
											if (iceAsteroid.y <= disparo2.y2) {
												
												disparo2.disparado = false
												
												if (iceAsteroidDamaged == false) {
													iceAsteroidDamage()
												}
											}
										}
									}
								}
								
							}
						}
							
						//disparo 3
						if (iceAsteroid.show == true) {
							if (disparo3.disparado == true) {
								
								if (iceAsteroid.x2 >= disparo3.x) {
									if (iceAsteroid.x <= disparo3.x2) {
										if (iceAsteroid.y2 >= disparo3.y) {
											if (iceAsteroid.y <= disparo3.y2) {
												
												disparo3.disparado = false
												
												if (iceAsteroidDamaged == false) {
													iceAsteroidDamage()
												}
											}
										}
									}
								}
								
							}
						}
						
						
						
						
						
						
						
						// bigAsteroid al tocar disparos
							
						//disparo 1
						if (bigAsteroid.show == true) {
							if (disparo.disparado == true) {
									
								if (bigAsteroid.x2 >= disparo.x) {
									if (bigAsteroid.x <= disparo.x2) {
										if (bigAsteroid.y2 >= disparo.y) {
											if (bigAsteroid.y <= disparo.y2) {
												
												disparo.disparado = false
												
												if (bigAsteroidDamaged == false) {
													bigAsteroidDamage()
												}
											}
										}
									}
								}
								
							}
						}
							
						//disparo 2
						if (bigAsteroid.show == true) {
							if (disparo2.disparado == true) {
								
								if (bigAsteroid.x2 >= disparo2.x) {
									if (bigAsteroid.x <= disparo2.x2) {
										if (bigAsteroid.y2 >= disparo2.y) {
											if (bigAsteroid.y <= disparo2.y2) {
												
												disparo2.disparado = false
												
												if (bigAsteroidDamaged == false) {
													bigAsteroidDamage()
												}
											}
										}
									}
								}
								
							}
						}
							
						//disparo 3
						if (bigAsteroid.show == true) {
							if (disparo3.disparado == true) {
								
								if (bigAsteroid.x2 >= disparo3.x) {
									if (bigAsteroid.x <= disparo3.x2) {
										if (bigAsteroid.y2 >= disparo3.y) {
											if (bigAsteroid.y <= disparo3.y2) {
												
												disparo3.disparado = false
												
												if (bigAsteroidDamaged == false) {
													bigAsteroidDamage()
												}
											}
										}
									}
								}
								
							}
						}
						
						
						
						
						
					
					// satelite al tocar disparos
							
						//disparo 1
						if (satelite.show == true) {
							if (disparo.disparado == true) {
									
								if (sateliteHitbox.x2 >= disparo.x) {
									if (sateliteHitbox.x <= disparo.x2) {
										if (sateliteHitbox.y2 >= disparo.y) {
											if (sateliteHitbox.y <= disparo.y2) {
												
												disparo.disparado = false
												
												if (sateliteDamaged == false) {
													sateliteDamage()
												}
											}
										}
									}
								}
								
							}
						}
							
						//disparo 2
						if (satelite.show == true) {
							if (disparo2.disparado == true) {
								
								if (sateliteHitbox.x2 >= disparo2.x) {
									if (sateliteHitbox.x <= disparo2.x2) {
										if (sateliteHitbox.y2 >= disparo2.y) {
											if (sateliteHitbox.y <= disparo2.y2) {
												
												disparo2.disparado = false
												
												if (sateliteDamaged == false) {
													sateliteDamage()
												}
											}
										}
									}
								}
								
							}
						}
							
						//disparo 3
						if (satelite.show == true) {
							if (disparo3.disparado == true) {
								
								if (sateliteHitbox.x2 >= disparo3.x) {
									if (sateliteHitbox.x <= disparo3.x2) {
										if (sateliteHitbox.y2 >= disparo3.y) {
											if (sateliteHitbox.y <= disparo3.y2) {
												
												disparo3.disparado = false
												
												if (sateliteDamaged == false) {
													sateliteDamage()
												}
											}
										}
									}
								}
								
							}
						}
					
					
					
					
					// sateliteSpecial al tocar disparos
							
						//disparo 1
						if (sateliteSpecial.show == true) {
							if (disparo.disparado == true) {
									
								if (sateliteSpecialHitbox.x2 >= disparo.x) {
									if (sateliteSpecialHitbox.x <= disparo.x2) {
										if (sateliteSpecialHitbox.y2 >= disparo.y) {
											if (sateliteSpecialHitbox.y <= disparo.y2) {
												
												disparo.disparado = false
												sateliteSpecialDamage()
											}
										}
									}
								}
								
							}
						}
							
						//disparo 2
						if (sateliteSpecial.show == true) {
							if (disparo2.disparado == true) {
								
								if (sateliteSpecialHitbox.x2 >= disparo2.x) {
									if (sateliteSpecialHitbox.x <= disparo2.x2) {
										if (sateliteSpecialHitbox.y2 >= disparo2.y) {
											if (sateliteSpecialHitbox.y <= disparo2.y2) {
												
												disparo2.disparado = false
												sateliteSpecialDamage()
											}
										}
									}
								}
								
							}
						}
							
						//disparo 3
						if (sateliteSpecial.show == true) {
							if (disparo3.disparado == true) {
								
								if (sateliteSpecialHitbox.x2 >= disparo3.x) {
									if (sateliteSpecialHitbox.x <= disparo3.x2) {
										if (sateliteSpecialHitbox.y2 >= disparo3.y) {
											if (sateliteSpecialHitbox.y <= disparo3.y2) {
												
												disparo3.disparado = false
												sateliteSpecialDamage()
											}
										}
									}
								}
								
							}
						}
					
					
					
					
					
					// lava al tocar disparos
							
						//disparo 1
						if (lava.show == true) {
							if (disparo.disparado == true) {
									
								if (lavaHitbox.x2 >= disparo.x) {
									if (lavaHitbox.x <= disparo.x2) {
										if (lavaHitbox.y2 >= disparo.y) {
											if (lavaHitbox.y <= disparo.y2) {
												
												disparo.disparado = false
											}
										}
									}
								}
								
							}
						}
							
						//disparo 2
						if (lava.show == true) {
							if (disparo2.disparado == true) {
								
								if (lavaHitbox.x2 >= disparo2.x) {
									if (lavaHitbox.x <= disparo2.x2) {
										if (lavaHitbox.y2 >= disparo2.y) {
											if (lavaHitbox.y <= disparo2.y2) {
												
												disparo2.disparado = false
											}
										}
									}
								}
								
							}
						}
							
						//disparo 3
						if (lava.show == true) {
							if (disparo2.disparado == true) {
								
								if (lavaHitbox.x2 >= disparo3.x) {
									if (lavaHitbox.x <= disparo3.x2) {
										if (lavaHitbox.y2 >= disparo3.y) {
											if (lavaHitbox.y <= disparo3.y2) {
												
												disparo3.disparado = false
											}
										}
									}
								}
								
							}
						}
						
						
						
						
						
						
						// twister al tocar disparos
							
						//disparo 1
						if (twister.show == true) {
							if (disparo.disparado == true) {
									
								if (twister.x2 >= disparo.x) {
									if (twister.x <= disparo.x2) {
										if (twister.y2 >= disparo.y) {
											if (twister.y <= disparo.y2) {
												
												disparo.disparado = false
											}
										}
									}
								}
								
							}
						}
							
						//disparo 2
						if (twister.show == true) {
							if (disparo2.disparado == true) {
								
								if (twister.x2 >= disparo2.x) {
									if (twister.x <= disparo2.x2) {
										if (twister.y2 >= disparo2.y) {
											if (twister.y <= disparo2.y2) {
												
												disparo2.disparado = false
											}
										}
									}
								}
								
							}
						}
							
						//disparo 3
						if (twister.show == true) {
							if (disparo2.disparado == true) {
								
								if (twister.x2 >= disparo3.x) {
									if (twister.x <= disparo3.x2) {
										if (twister.y2 >= disparo3.y) {
											if (twister.y <= disparo3.y2) {
												
												disparo3.disparado = false
											}
										}
									}
								}
								
							}
						}
					
					
					
				
				}
