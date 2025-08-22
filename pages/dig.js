const damage = 4;
const base_root = 4;

function roll(condition) {
	let num = Math.floor(Math.random() * 100) + 1;
	let time = 0;
	let con = 0;
	let rolls = 1;
	let mess = '';

	switch (condition) {
		case 4:
			con = 3;
			num /= 2;
			break;
		case 3:
			con = 0;
			num /= 2;
			break;
	}

	if (condition > 4 && condition < 9) {
		if (condition === 5) {
			num = 101;
			mess += ('\nyou found a pit of water that is 20 feet deep, dex save to not fall in\n');
			con = 9;
		} else {
			con = condition - 1;
		}
	}

	if (num > 0 && num < 6) {
		mess += ('you found nothing\n');
	} else if (num < 17) {
		const clust = Math.floor(Math.random() * 5) + 1;
		mess += (`you found ${clust} clusters of pebbles\n`);
		time += clust * 60;
	} else if (num < 21) {
		mess += ('you found a root imbued around a rock\n');
		time += 60;
	} else if (num < 31) {
		mess += ('you found 3 rocks\n');
		time += 240;
	} else if (num < 51) {
		const seconds = fight((Math.floor(Math.random() * 5) + 1) + (Math.floor(Math.random() * 5) + 1));
		mess += (`you found 2 roots and you got past them in ${seconds} seconds\n`);
		time += seconds;
	} else if (num < 61) {
		const rocks = Math.floor(Math.random() * 3) + 1;
		const seconds = fight(Math.floor(Math.random() * base_root + 1) + 1);
		mess += (`you found ${rocks} rocks and a root which was destroyed in ${seconds} seconds\n`);
		time += (rocks * 60) + seconds;
	} else if (num < 66) {
		con = 8;
		mess += ('you found nothing\n');
	} else if (num < 71) {
		mess += ("you found a big rock\n");
		time += 180;
	} else if (num < 73) {
		const seconds = fight((Math.floor(Math.random() * 3) + 1) + (Math.floor(Math.random() * 3) + 1) + (Math.floor(Math.random() * 3) + 1) + (Math.floor(Math.random() * 3) + 1));
		mess += (`you found a really big root destroyed in ${seconds} seconds\n`);
		time += seconds;
	} else if (num < 76) {
		mess += ("you feel an uncontrollable urge to dig and go another 10 feet\n");
		rolls--;
		let out = roll(con);
		time += out[1];
		mess += out[2];
		rolls+=out[3];
		out = roll(con);
		time += out[1];
		mess += out[2];
		rolls+=out[3];
	} else if (num < 78) {
		mess += ("you found a giant rock\nyou cannot dig around it.\n");
		con = 9;
	} else if (num < 80) {
		mess += treasure();
		mess += (" ^\n/ \\ \n |\ntreasure found\n");
	} else if (num < 90) {
		con = 4;
		mess += ("you found that you're tired but must keep digging, you dig twice the amount at half the speed\n");
		rolls--;
		let out = roll(con);
		time += out[1];
		mess += out[2];
		rolls+=out[3];
		out = roll(con);
		time += out[1];
		mess += out[2];
		rolls+=out[3];
		con = out[0];
	} else if (num < 101) {
		let out = roll(1);
		time += out[1];
		mess += out[2];
		rolls+=out[3];
	}

	if (condition !== 1) {
		time += 420;
	} else {
		time = (time * 2);
	}

	return [con, time, mess, rolls];
}

function treasure() {
	let num = Math.floor(Math.random() * 100) + 1;
	let mess = '';

	if (num > 0 && num < 51) {
		if (num % 2 === 0) {
			mess += archeology();
		} else {
			mess += paleontology();
		}
	} else if (num < 76) {
		mess += potion();
	} else if (num < 81) {
		let gold = 0;
		for (i = 0; i<30;i++) {
			gold += Math.floor(Math.random() * 20) + 1;
		}
		mess += `you found a stash of ${gold} gold`;
	} else if (num < 82) {
		let leg = legendary();
		if (Math.random()<0.4) {
			mess += `you find a fragment/map of ${leg}`;
		} else {
			mess += `you find ${leg}`;
		}
	} else if (num < 83) {
		mess += `play 3 games of rps with the dm to see if you find ${artifact()}`;
	} else if (num < 85) {
		mess += very_rare();
	} else if (num < 91) {
		mess += rare();
	} else if (num < 101) {
		mess += uncommon();
	}
	return mess += '\n';
}

function archeology() {
	return `you found a pottery shard`;
}

function paleontology() {
	return `you found a bone`;
}

function potion() {
	let potions = ["Elixir of Health","Oil of Etherealness","Oil of Sharpness","Oil of Slipperiness","Philter of Love","Potion of Animal Friendship","Potion of Clairvoyance","Potion of Climbing","Potion of Cloud Giant Strength","Potion of Diminution","Potion of Fire Breath","Potion of Fire Giant Strength","Potion of Flying","Potion of Frost Giant Strength","Potion of Gaseous Form","Potion of Greater Healing","Potion of Growth","Potion of Healing","Potion of Heroism","Potion of Hill Giant Strength","Potion of Invisibility","Potion of Invulnerability","Potion of Longevity","Potion of Mind Reading","Potion of Poison","Potion of Resistance","Potion of Speed","Potion of Stone Giant Strength","Potion of Storm Giant Strength","Potion of Superior Healing","Potion of Supreme Healing","Potion of Vitality",
"Potion of Water Breathing"];
	return `you found a(n) ${potions[Math.floor(Math.random() * potions.length)]}`;
}

function legendary() {
	let legs = ["Apparatus of Kwalish","Armor +3","Armor of Invulnerability","Belt of Giant Strength","Blackrazor","Cloak of Invisibility","Crystal Ball","Cubic Gate","Deck of Many Things","Defender","Efreeti Chain","Hammer of Thunderbolts","Holy Avenger","Horn of Valhalla","Instrument of the Bards","Ioun Stone","Iron Flask","Luck Blade","Moonblade","Plate Armor of Etherealness","Potion of Giant Strength","Ring of Djinni Summoning","Ring of Elemental Command","Ring of Invisibility","Ring of Spell Turning","Ring of Three Wishes","Robe of the Archmagi","Rod of Lordly Might","Rod of Resurrection","Scarab of Protection","Sovereign Glue","Spell Scroll","Sphere of Annihilation","Staff of the Magi","Sword of Answering","Talisman of Pure Good","Talisman of the Sphere","Talisman of Ultimate Evil","Tome of the Stilled Tongue","Universal Solvent","Vorpal Sword","Well of Many Worlds","Whelm"]
	return `you found a(n) ${legs[Math.floor(Math.random() * legs.length)]}`;
}

function artifact() {
	let arts = ["Axe of the Dwarvish Lords","Book of Exalted Deeds","Book of Vile Darkness","Eye and Hand of Vecna","Orb of Dragonkind","Sword of Kas","Wand of Orcus"]
	return `you found the ${arts[Math.floor(Math.random() * arts.length)]}`;
}

function very_rare() {
	let item = ["Ammunition +1, +2, or +3","Amulet of the Planes","Animated Shield","Armor +1, +2, or +3","Arrow of Slaying","Bag of Devouring","Belt of Giant Strength","Candle of Invocation","Carpet of Flying","Cloak of Arachnida","Crystal Ball","Dancing Sword","Demon Armor","Dragon Scale Mail","Dwarven Plate","Dwarven Thrower","Efreeti Bottle","Figurine of Wondrous Power","Frost Brand","Helm of Brilliance","Horn of Valhalla","Horseshoes of a Zephyr","Instrument of the Bards","Ioun Stone","Manual of Bodily Health","Manual of Gainful Exercise","Manual of Golems","Manual of Quickness of Action","Mirror of Life Trapping","Nine Lives Stealer","Nolzur's Marvelous Pigments","Oathbow","Oil of Sharpness","Potion of Flying","Potion of Giant Strength","Potion of Healing","Potion of Invisibility","Potion of Longevity","Potion of Speed","Potion of Vitality","Ring of Regeneration","Ring of Shooting Stars","Ring of Telekinesis","Robe of Scintillating Colors","Robe of Stars","Rod of Absorption","Rod of Alertness","Rod of Security","Rod of the Pact Keeper","Scimitar of Speed","Shield, +1, +2, or +3","Spell Scroll","Spellguard Shield","Staff of Fire","Staff of Frost","Staff of Power","Staff of Striking","Staff of Thunder and Lightning","Sword of Sharpness","Tome of Clear Thought","Tome of Leadership and Influence","Tome of Understanding","Wand of Polymorph","Wand of the War Mage +1, +2, or +3","Weapon +1, +2, or +3"]
	return `you found a(n) ${item[Math.floor(Math.random() * item.length)]}(very rare)`;
}

function rare() {
	let item = ["Ammunition +1, +2, or +3","Amulet of Health","Armor +1, +2, or +3","Armor of Resistance","Armor of Vulnerability","Arrow-Catching Shield","Bag of Beans","Bead of Force","Belt of Dwarvenkind","Belt of Giant Strength","Berserker Axe","Boots of Levitation","Boots of Speed","Bowl of Commanding Water Elementals","Bracers of Defense","Brazier of Commanding Fire Elementals","Cape of the Mountebank","Censer of Controlling Air Elementals","Chime of Opening","Cloak of Displacement","Cloak of the Bat","Cube of Force","Daern's Instant Fortress","Dagger of Venom","Dimensional Shackles","Dragon Slayer","Elixir of Health","Elven Chain","Figurine of Wondrous Power","Flame Tongue","Folding Boat","Gem of Seeing","Giant Slayer","Glamoured Studded Leather","Helm of Teleportation","Heward's Handy Haversack","Horn of Blasting","Horn of Valhalla","Horseshoes of Speed","Instrument of the Bards","Ioun Stone","Iron Bands of Bilarro","Mace of Disruption","Mace of Smiting","Mace of Terror","Mantle of Spell Resistance","Necklace of Fireballs","Necklace of Prayer Beads","Oil of Etherealness","Periapt of Proof against Poison","Portable Hole","Potion of Clairvoyance","Potion of Diminution","Potion of Gaseous Form","Potion of Giant Strength","Potion of Healing","Potion of Heroism","Potion of Invulnerability","Potion of Mind Reading","Quaal's Feather Token","Ring of Animal Influence","Ring of Evasion","Ring of Feather Falling","Ring of Free Action","Ring of Poison Resistance","Ring of Protection","Ring of Resistance","Ring of Spell Storing","Ring of the Ram","Ring of X-ray Vision","Robe of Eyes","Rod of Rulership","Rod of the Pact Keeper","Rope of Entanglement","Scroll of Protection","Shield of Missile Attraction","Shield, +1, +2, or +3","Spell Scroll","Staff of Charming","Staff of Healing","Staff of Swarming Insects","Staff of the Woodlands","Staff of Withering","Stone of Controlling Earth Elementals","Sun Blade","Sword of Life Stealing","Sword of Wounding","Tentacle Rod","Vicious Weapon","Wand of Binding","Wand of Enemy Detection","Wand of Fear","Wand of Fireballs","Wand of Lightning Bolts","Wand of Paralysis","Wand of the War Mage +1, +2, or +3","Wand of Wonder","Weapon +1, +2, or +3","Wings of Flying"]
	return `you found a(n) ${item[Math.floor(Math.random() * item.length)]}(rare)`;
}

function uncommon() {
	let item = ["Adamantine Armor","Alchemy Jug","Ammunition +1, +2, or +3","Amulet of Proof against Detection and Location","Bag of Holding","Bag of Tricks","Boots of Elvenkind","Boots of Striding and Springing","Boots of the Winterlands","Bracers of Archery","Brooch of Shielding","Broom of Flying","Cap of Water Breathing","Circlet of Blasting","Cloak of Elvenkind","Cloak of Protection","Cloak of the Manta Ray","Decanter of Endless Water","Deck of Illusions","Driftglobe","Dust of Disappearance","Dust of Dryness","Dust of Sneezing and Choking","Elemental Gem","Eversmoking Bottle","Eyes of Charming","Eyes of Minute Seeing","Eyes of the Eagle","Figurine of Wondrous Power","Gauntlets of Ogre Power","Gem of Brightness","Gloves of Missile Snaring","Gloves of Swimming and Climbing","Gloves of Thievery","Goggles of Night","Hat of Disguise","Headband of Intellect","Helm of Comprehending Languages","Helm of Telepathy","Immovable Rod","Instrument of the Bards","Javelin of Lightning","Keoghtom's Ointment","Lantern of Revealing","Mariner's Armor","Medallion of Thoughts","Mithral Armor","Necklace of Adaptation","Oil of Slipperiness","Pearl of Power","Periapt of Health","Periapt of Wound Closure","Philter of Love","Pipes of Haunting","Pipes of the Sewers","Potion of Animal Friendship","Potion of Fire Breath","Potion of Giant Strength","Potion of Growth","Potion of Healing","Potion of Poison","Potion of Resistance","Potion of Water Breathing","Quiver of Ehlonna","Ring of Jumping","Ring of Mind Shielding","Ring of Swimming","Ring of Warmth","Ring of Water Walking","Robe of Useful Items","Rod of the Pact Keeper","Rope of Climbing","Saddle of the Cavalier","Sending Stones","Sentinel Shield","Shield, +1, +2, or +3","Slippers of Spider Climbing","Spell Scroll","Staff of the Adder","Staff of the Python","Stone of Good Luck (Luckstone)","Sword of Vengeance","Trident of Fish Command","Wand of Magic Detection","Wand of Magic Missiles","Wand of Secrets","Wand of the War Mage +1, +2, or +3","Wand of Web","Weapon +1, +2, or +3","Weapon of Warning","Wind Fan","Winged Boots"]
	return `you found a(n) ${item[Math.floor(Math.random() * item.length)]}(uncommon)`;
}

function fight(target) {
	let health = target;
	let time = 0;

	while (health >= 0) {
		health--;//health - Math.floor(Math.random() * damage += 1) + 1
		time += 6;
	}

	return time;
}
function run() {
	let ipnut = '';
	let numb = 0;

	try {
		ipnut = document.getElementById('digs').value;
		numb = parseInt(ipnut);
	} catch {
		numb = 1;
	}

	let output = window.location.hash.split(',');
	if (!(output.length === 3)) output = [0,0,0];
	else {
		output[1] = parseInt(output[1]);
		output[2] = parseInt(output[2]);
	}
	let full_time = output[2];
	let depth = output[1];

	let message = '';
	for (let i = 0; i < numb; i++) {
		output = roll(output[0]);
		full_time += output[1];
		depth += 5 * output[3];
		message += output[2]
		message += (`\ntime taken: ${Math.floor(output[1] / 60)}:${String(output[1] % 60).padStart(2, '0')}\t${depth}'\n`);
		if (output[0] === 9) {
			message += ("new hole\n");
			depth = 0;
		}
	}

	message += (`total time: ${Math.floor(full_time / 3600)}:${String(Math.floor(full_time / 60) % 60).padStart(2, '0')}:${String(full_time % 60).padStart(2, '0')}`);
	document.getElementById("results").textContent=message;
	let hash = `0,${depth},${full_time}`;
	window.location.hash = hash;
}

function reset() {
	window.location.hash = '';
}

document.getElementById('myButton').addEventListener('click',run);
document.getElementById('resetButton').addEventListener('click',reset);
document.getElementById('digs').addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		run();
	}
});
