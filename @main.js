"use strict";

class ArtificialMentalRetardation
{
	#running;

	constructor()
	{
		if(!ArtificialMentalRetardation.instance)
		{
		}
		return ArtificialMentalRetardation.instance||(ArtificialMentalRetardation.instance=this);
	}
	async start()
	{
		this.#running=true;
		while(this.#running)
		{
		}
	}
	stop()
	{
		this.#running=false;
	}
}
class Image
{
	static get EndScreen_lose()
	{
		return "none";
	}
	static get EndScreen_pointerout()
	{
		return "none";
	}
	static get EndScreen_pointerover()
	{
		return "none";
	}
	static get EndScreen_timeup()
	{
		return "none";
	}
	static get EndScreen_win()
	{
		return "none";
	}
	static get StartScreen_pointerout()
	{
		return "url(shapes/82.svg)";
	}
	static get StartScreen_pointerover()
	{
		return "url(shapes/83.svg)";
	}
}
class Sound
{
	static #background;
	static #exit;
	static #good;
	static #lose;
	static #pointerover;
	static #start;
	static #timeup;
	static #win;
	static #wrong;

	static constructor()
	{
		Sound.#background=new Audio("sounds/1_bgmusic05.wav.mp3");
		Sound.#exit=new Audio("sounds/74.mp3");
		Sound.#good=null;
		Sound.#lose=null;
		Sound.#pointerover=new Audio("sounds/98.mp3");
		Sound.#start=new Audio("sounds/2_開始玩.mp3");
		Sound.#timeup=null;
		Sound.#win=null;
		Sound.#wrong=null;
	}
	static get background()
	{
		return Sound.#background;
	}
	static get exit()
	{
		return Sound.#exit;
	}
	static get good()
	{
		return Sound.#good;
	}
	static get lose()
	{
		return Sound.#lose;
	}
	static get pointerover()
	{
		return Sound.#pointerover;
	}
	static get start()
	{
		return Sound.#start;
	}
	static get timeup()
	{
		return Sound.#timeup;
	}
	static get win()
	{
		return Sound.#win;
	}
	static get wrong()
	{
		return Sound.#wrong;
	}
}

class Stage
{
	#boy;
	#element;
	#index;
	#maximized=false;

	$animationend;
	$click;
	$pointerover;
	$pointerout;

	static get forest()
	{
		return 0;
	}
	static get undersea()
	{
		return 1;
	}
	static get bathroom()
	{
		return 2;
	}

	constructor(domelement, index)
	{
		this.#element=new Element(domelement);
		this.#boy=new Element(domelement.children[0]);
		this.#index=index;

		this.#boy.addEventListener("click", async () =>
		{
			new Audio("sounds/3_pick.mp3").play();
			new Cutie().visible=true;
			this.#boy.style["width"]="181px";
			this.#boy.style["height"]="253px";
			this.#boy.image="url(shapes/125.svg)";
			this.#boy.left+=6;
			this.#boy.top-=3;
			this.#boy.enable=false;
			this.#boy.zindex=3;
			await Utility.waitForSeconds(0.1);
			this.#boy.image="url(shapes/127.svg)";
			await Utility.waitForSeconds(0.1);

			let vy=5;
			let scale=0.65;
			const stopTop=this.#boy.top+10;
			while(true)
			{
				if((vy<0)&&(this.#boy.top>stopTop))
				{
					await Utility.waitForSeconds(1);
					break;
				}

				this.#boy.style["top"]=parseFloat(this.#boy.style["top"])-vy+"px";
				this.#boy.transform=`scale(${scale},${scale})`;
				vy-=0.1;
				scale+=0.002;
				await Utility.waitForSeconds(0);
			}

			this.$click&&this.$click(this.#maximized);
			this.#boy.visible=false;
		});
		const animationend=() =>
		{
			(async () =>
			{
				this.#element.style["left"]="-2px";
				this.#element.style["top"]="-2px";
				this.#element.transform="scale(1.01, 1.01)";
				this.#element.style["animation"]="none";
				document.querySelector(".white-screen").style["display"]="block";
				await Utility.waitForSeconds(0.1);
				this.#element.children[1].style["display"]="block";
				document.querySelector(".white-screen").style["display"]="none";
				this.#maximized=true;
			})();
			this.#boy.style["width"]="182px";
			this.#boy.style["height"]="225px";
			this.#boy.transform="scale(0.65, 0.65) ";
			this.#boy.image="url(shapes/122.svg)";
			this.#boy.enable=true;
			this.#boy.visible=true;
			this.#boy.zindex=1;
			this.$animationend&&this.$animationend(this.#boy);
		}
		const click=() =>
		{
			if(this.#maximized===false)
			{
				this.#element.style["-webkit-filter"]="none";
				this.#element.style["filter"]="none";
				this.$click&&this.$click(this.#maximized);
			}
		}
		const pointerover=() =>
		{
			if(this.#maximized===false)
			{
				new Audio("sounds/98.mp3").play();
			}
			this.#element.style["-webkit-filter"]="url(#sofGlow)";
			this.#element.style["filter"]="url(#sofGlow)";
		}
		const pointerout=() =>
		{
			this.#element.style["-webkit-filter"]="none";
			this.#element.style["filter"]="none";
		}
		this.#element.domelement.addEventListener("animationend", animationend);
		this.#element.addEventListener("click", click);
		this.#element.addEventListener("pointerover", pointerover);
		this.#element.addEventListener("pointerout", pointerout);
	}
	get element()
	{
		return this.#element;
	}
	get index()
	{
		return this.#index;
	}
	async maximized()
	{
		this.element.style["z-index"]=99;
		this.element.style["animation"]=`stage-${(this.#index===Stage.forest)? "forest":(this.#index===Stage.undersea)? "undersea":"bathroom"} 0.5s linear`;
		await Utility.waitForCondition(() => (this.#maximized===true));
	}
	minimized()
	{
		this.element.style["z-index"]=10;
		this.element.style["left"]=(this.#index===Stage.forest)? "-250px":(this.#index===Stage.undersea)? "0":"250px";
		this.element.style["top"]="-130px";
		this.element.transform="scale(0.28, 0.28)";
		this.#maximized=false;
	}
}
class Bathroom extends Stage
{
	constructor(click)
	{
		super(document.querySelector(".stages > .stage-bathroom"), Stage.bathroom);
		this.$animationend=(boy) =>
		{
			const position=[{left: 75, top: 0}, {left: 70, top: 320}, {left: 560, top: 340}][Utility.random(3)];
			boy.left=position.left;
			boy.top=position.top;
		}
		this.$click=(maximized) =>
		{
			click&&click(this, maximized);
		}
	}
}
class Boy
{
	#element;

	constructor()
	{
		this.#element=new Element(document.querySelector(".boy"));
	}
	async jumpBackward(index)
	{
		new Audio("sounds/99.mp3").play();
		let vx=(index===Stage.forest)? 1.4:(index===Stage.undersea)? 0:-1.4;
		let vy=10;
		let scale=1;
		while(true)
		{
			if((vy<0)&&(this.#element.top>120))
			{
				this.#element.visible=false;
				break;
			}
			this.#element.left-=vx;
			this.#element.top-=vy;
			this.#element.transform=`scale(${scale},${scale})`;
			vy-=0.1;
			scale-=0.004;
			await Utility.waitForSeconds(0);
		}
	}
	async jumpForward(index)
	{
		new Audio("sounds/99.mp3").play();
		this.#element.visible=true;
		let vx=(index===Stage.forest)? -1.36:(index===Stage.undersea)? 0:1.36;
		let vy=7.599;
		let scale=0.296;
		while(true)
		{
			if((vy<0)&&(this.#element.top>214.8))
			{
				this.#element.style["left"]="310px";
				this.#element.style["top"]="270px";
				this.#element.transform="scale(1.4, 1.4)";
				break;
			}
			this.#element.left-=vx;
			this.#element.top-=vy;
			this.#element.transform=`scale(${scale},${scale})`;
			vy-=0.1;
			scale+=0.00615;
			await Utility.waitForSeconds(0);
		}
	}
}
class Cutie
{
	#element;
	#face;
	#eyes
	#message;

	constructor()
	{
		if(!Cutie.instance)
		{
			this.#element=new Element(document.querySelector(".cutie"));
			this.#face=new Element(document.querySelector(".cutie > .cutie-face"));
			this.#eyes=new Element(document.querySelector(".cutie > .cutie-eyes"));
			this.#message=new Element(document.querySelector(".cutie > .cutie-message"));
			const wink=(winking) =>
			{
				if(winking)
				{
					this.#eyes.image="url(shapes/159.svg)";
					setTimeout(wink, 100.0, false);
				}
				else
				{
					this.#eyes.image="url(shapes/158.svg)";
					setTimeout(wink, Math.max(0.5*1000, Math.random()*1*1000), true);
				}
			};
			wink(true);
		}
		return Cutie.instance||(Cutie.instance=this);
	}
	set visible(value)
	{
		const audio=new Audio("sounds/2_bababa.mp3");
		audio.play();
		if(value)
		{
			this.#element.visible=true;
			new Audio("sounds/3_pick.mp3").play();
			this.#face.image="url(shapes/157.svg)";
			this.#message.image="url(shapes/162.svg)";
			setTimeout(() =>
			{
				this.#element.visible=false;
			}, 1*1000);
			setTimeout(() =>
			{
				audio.pause();
				audio.currentTime=0;
			}, 1.75*1000);
		}
		else
		{
			this.#element.visible=false;
		}
	}
}
class Forest extends Stage
{
	constructor(click)
	{
		super(document.querySelector(".stages > .stage-forest"), Stage.forest);
		this.$animationend=(boy) =>
		{
			const position=[{left: 55, top: 205}, {left: 270, top: 330}, {left: 550, top: 185}][Utility.random(3)];
			boy.left=position.left;
			boy.top=position.top;
		}
		this.$click=(maximized) =>
		{
			click&&click(this, maximized);
		}
	}
}
class Undersea extends Stage
{
	constructor(click)
	{
		super(document.querySelector(".stages > .stage-undersea"), Stage.undersea);
		this.$animationend=(boy) =>
		{
			const position=[{left: 5, top: 235}, {left: 380, top: 315}, {left: 640, top: 265}][Utility.random(3)];
			boy.left=position.left;
			boy.top=position.top;
		}
		this.$click=(maximized) =>
		{
			click&&click(this, maximized);
		}
	}
}

class Main
{
	artificialMentalRetardation;
	autoplay;
	backgroundMusic;
	bathroom;
	boy;
	clickable;
	forest;
	starCursor;
	undersea;

	constructor()
	{
		this.autoplay_click=this.autoplay_click.bind(this);
		this.stage_click=this.stage_click.bind(this);
		this.start=this.start.bind(this);

		new AutoPlay();
		new ExitButton();
		new FullScreen();
		new StartScreen(this.start);

		this.artificialMentalRetardation=new ArtificialMentalRetardation();
		this.autoplay=new AutoPlay(this.autoplay_click);
		this.backgroundMusic=new BackgroundMusic();
		this.boy=new Boy();
		this.starCursor=new StarCursor();
		this.forest=new Forest(this.stage_click);
		this.undersea=new Undersea(this.stage_click);
		this.bathroom=new Bathroom(this.stage_click);

		this.starCursor.visible=true;
	}
	async start()
	{
	}
	autoplay_click(running)
	{
		if(running)
		{
			if(this.startScreen.visible)
			{
				this.startScreen.visible=false;
				this.start();
			}
			else if(this.endScreen.visible)
			{
				this.restart();
			}
			this.artificialMentalRetardation.start()
		}
		else
		{
			this.artificialMentalRetardation.stop();
		}
	}
	async stage_click(stage, maximized)
	{
		if(this.clickable===false)
		{
			return;
		}
		this.clickable=false;
		if(maximized===false)
		{
			await this.boy.jumpBackward(stage.index);
			await stage.maximized();
		}
		else
		{
			stage.minimized();
			await this.boy.jumpForward(stage.index);
		}
		this.clickable=true;
	}
}

Sound.constructor();
new Main();