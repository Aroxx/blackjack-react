(this["webpackJsonpblackjack-react"]=this["webpackJsonpblackjack-react"]||[]).push([[0],{40:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(0),s=t.n(r),d=t(13),l=t.n(d),i=t(29),c=t(30),u=t(33),o=t(32),p=t(18),h=(t(39),t(53)),b=t(51),j={cardBack:0,aceClubs:11,twoClubs:2,threeClubs:3,fourClubs:4,fiveClubs:5,sixClubs:6,sevenClubs:7,eightClubs:8,nineClubs:9,tenClubs:10,jackClubs:10,queenClubs:10,kingClubs:10,aceSpades:11,twoSpades:2,threeSpades:3,fourSpades:4,fiveSpades:5,sixSpades:6,sevenSpades:7,eightSpades:8,nineSpades:9,tenSpades:10,jackSpades:10,queenSpades:10,kingSpades:10,aceHearts:11,twoHearts:2,threeHearts:3,fourHearts:4,fiveHearts:5,sixHearts:6,sevenHearts:7,eightHearts:8,nineHearts:9,tenHearts:10,jackHearts:10,queenHearts:10,kingHearts:10,aceDiamonds:11,twoDiamonds:2,threeDiamonds:3,fourDiamonds:4,fiveDiamonds:5,sixDiamonds:6,sevenDiamonds:7,eightDiamonds:8,nineDiamonds:9,tenDiamonds:10,jackDiamonds:10,queenDiamonds:10,kingDiamonds:10},H=["aceClubs","twoClubs","threeClubs","fourClubs","fiveClubs","sixClubs","sevenClubs","eightClubs","nineClubs","tenClubs","jackClubs","queenClubs","kingClubs","aceSpades","twoSpades","threeSpades","fourSpades","fiveSpades","sixSpades","sevenSpades","eightSpades","nineSpades","tenSpades","jackSpades","queenSpades","kingSpades","aceHearts","twoHearts","threeHearts","fourHearts","fiveHearts","sixHearts","sevenHearts","eightHearts","nineHearts","tenHearts","jackHearts","queenHearts","kingHearts","aceDiamonds","twoDiamonds","threeDiamonds","fourDiamonds","fiveDiamonds","sixDiamonds","sevenDiamonds","eightDiamonds","nineDiamonds","tenDiamonds","jackDiamonds","queenDiamonds","kingDiamonds","aceClubs","twoClubs","threeClubs","fourClubs","fiveClubs","sixClubs","sevenClubs","eightClubs","nineClubs","tenClubs","jackClubs","queenClubs","kingClubs","aceSpades","twoSpades","threeSpades","fourSpades","fiveSpades","sixSpades","sevenSpades","eightSpades","nineSpades","tenSpades","jackSpades","queenSpades","kingSpades","aceHearts","twoHearts","threeHearts","fourHearts","fiveHearts","sixHearts","sevenHearts","eightHearts","nineHearts","tenHearts","jackHearts","queenHearts","kingHearts","aceDiamonds","twoDiamonds","threeDiamonds","fourDiamonds","fiveDiamonds","sixDiamonds","sevenDiamonds","eightDiamonds","nineDiamonds","tenDiamonds","jackDiamonds","queenDiamonds","kingDiamonds"],S=["aceClubs","aceSpades","aceHearts","aceDiamonds"],y=t(48),f=t(49),m=(t(40),function(e){return Object(n.jsx)("i",{className:e.card})}),D=function(e){return Object(n.jsxs)(y.a,{lg:8,style:{padding:"0 0 20px 0"},children:[Object(n.jsx)(f.a,{children:e.dealerHand.map((function(e){return Object(n.jsx)(m,{card:e},Math.floor(1e6*Math.random()))}))}),Object(n.jsx)(f.a,{children:e.playerHand.map((function(e){return Object(n.jsx)(m,{card:e},Math.floor(1e6*Math.random()))}))})]})},g=t(50),k=t(55),x=t(54),O=function(e){var a={padding:"30px 0 0 0"};return Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)(y.a,{lg:{span:4,offset:4},style:a,children:Object(n.jsxs)(f.a,{children:[Object(n.jsxs)("h2",{children:["Player Bank: $",e.playerBank]}),Object(n.jsxs)("h2",{children:["Pot: $",e.currentPot]})]})}),Object(n.jsx)(y.a,{style:a,children:Object(n.jsx)(f.a,{lg:{span:4,offset:4},children:Object(n.jsxs)(g.a,{size:"lg",children:[Object(n.jsx)(g.a.Prepend,{children:Object(n.jsx)(k.a,{variant:!e.isValid||e.currentPot>0||e.handDealt?"outline-success":"success",onClick:e.submitBet,disabled:!e.isValid||e.currentPot>0||e.handDealt,children:"Place Bet"})}),Object(n.jsx)(x.a,{placeholder:"You must place a bet...","aria-label":"Bet Amount",value:e.betInput,onChange:function(a){return e.inputChangedHandler(a)}})]})})})]})},v=function(e){var a={margin:"10px 10px 0 0"};return Object(n.jsx)(y.a,{style:{padding:"20px 0 0 0"},children:Object(n.jsxs)(f.a,{lg:{span:6,offset:3},children:[Object(n.jsx)(k.a,{style:a,size:"lg",variant:e.handDealt||e.currentPot<=0?"outline-primary":"primary",onClick:e.deal,disabled:e.handDealt||e.currentPot<=0,children:"Deal Hand"}),Object(n.jsx)(k.a,{style:a,size:"lg",variant:!e.handDealt||e.playerStand?"outline-warning":"warning",onClick:e.hit,disabled:!e.handDealt||e.playerStand,children:"Hit"}),Object(n.jsx)(k.a,{style:a,size:"lg",variant:!e.handDealt||e.playerStand?"outline-success":"success",onClick:e.playDealer,disabled:!e.handDealt||e.playerStand,children:"Stand"}),Object(n.jsx)(k.a,{style:a,size:"lg",variant:e.dealerHidden?"outline-danger":"danger",onClick:e.reset,disabled:e.dealerHidden,children:"Clear Hand"})]})})},C=(t(45),function(e){var a=null,t=null,r=null,s=null;return!0===e.playerBusted?(a="Player Busted!",t="Dealer Won!",r="Loser",s="Winner"):!0===e.dealerBusted?(a="Player Won!",t="Dealer Busted!",r="Winner",s="Loser"):"tied"===e.result?(a="It's a Draw!",t="It's a Draw!",r="Tied",s="Tied"):"player"===e.result?(a="Player Won!",t="Dealer Lost!",r="Winner",s="Loser"):"dealer"===e.result?(a="Player Lost!",t="Dealer Won!",r="Loser",s="Winner"):(a=".",t=".",r="Hidden",s="Hidden"),Object(n.jsxs)(y.a,{lg:8,children:[Object(n.jsxs)(f.a,{className:s,children:[" ",t," "]}),Object(n.jsxs)(f.a,{className:r,children:[" ",a," "]})]})}),B=function(e){return Object(n.jsxs)(y.a,{lg:8,children:[Object(n.jsx)(f.a,{children:Object(n.jsxs)("h2",{children:["Dealer Hand: ",e.dealerHidden?"\ud83e\udd37":e.dealerScore]})}),Object(n.jsx)(f.a,{children:Object(n.jsxs)("h2",{children:["Player Hand: ",e.playerScore]})})]})},I=t(27),P=t(52),w=function(e){return Object(n.jsxs)(P.a,Object(I.a)(Object(I.a)({},e),{},{size:"lg",centered:!0,children:[Object(n.jsx)(P.a.Header,{closeButton:!0,children:Object(n.jsx)(P.a.Title,{children:"Game Over!"})}),Object(n.jsx)(P.a.Body,{children:Object(n.jsx)("p",{children:"You have run out of money! Close this message to start over."})}),Object(n.jsx)(P.a.Footer,{children:Object(n.jsx)(k.a,{onClick:e.onHide,children:"Close"})})]}))},q={playerScore:0,dealerScore:0,playerBank:500,currentPot:0,betInput:"",betInputIsValid:!1,playerHand:["cardBack","cardBack"],dealerHand:[],dealerHandHidden:["cardBack","cardBack"],dealerHidden:!0,currentDeck:Object(p.a)(H),handDealt:!1,playerStand:!1,playerBusted:!1,dealerBusted:!1,result:"",gameOver:!1},R=function(e){Object(u.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).validateInput=function(e){return new RegExp("^\\d+$").test(e)&&parseInt(e)<=n.state.playerBank&&parseInt(e)>0},n.betInputHandler=function(e){n.validateInput(e.target.value)?n.setState({betInput:e.target.value,betInputIsValid:!0}):n.setState({betInput:e.target.value,betInputIsValid:!1})},n.submitBetHandler=function(){n.setState((function(e){return{currentPot:2*parseInt(e.betInput),playerBank:e.playerBank-=parseInt(e.betInput)}}))},n.getRandomCard=function(){var e=Object(p.a)(n.state.currentDeck),a=Math.floor(Math.random()*(e.length-1)),t=e[a];return e.splice(a,1),n.setState({currentDeck:e}),t},n.dealHand=function(){if(!0===n.state.handDealt)return null;var e=[n.getRandomCard(),n.getRandomCard()],a=[n.getRandomCard(),n.getRandomCard()];n.setState({handDealt:!0,playerHand:e,dealerHand:a},(function(){return n.calculatePlayerScore()}))},n.hit=function(){if(!1===n.state.handDealt)return null;var e=Object(p.a)(n.state.playerHand);e.push(n.getRandomCard()),n.setState({playerHand:e},(function(){return n.calculatePlayerScore()}))},n.calculatePlayerScore=function(){var e=0,a=0;n.state.playerHand.forEach((function(t){e+=j[t],S.includes(t)&&a++,e>21&&a>0&&(e-=10,a--)})),e>21?n.setState({playerScore:e},(function(){return n.playerBusted()})):n.setState({playerScore:e})},n.playerBusted=function(){var e=0,a=0;n.state.dealerHand.forEach((function(t){e+=j[t],S.includes(t)&&a++,e>21&&a>0&&(e-=10,a--)})),n.setState({playerBusted:!0,result:"dealer",dealerHidden:!1,dealerScore:e,playerStand:!0},(function(){return n.handOver()}))},n.playDealerHand=function(){var e=0,a=0,t=Object(p.a)(n.state.dealerHand);for(t.forEach((function(t){e+=j[t],S.includes(t)&&a++,e>21&&a>0&&(e-=10,a--)}));e<17;){var r=n.getRandomCard();t.push(r),e+=j[r],S.includes(r)&&a++,e>21&&a>0&&(e-=10,a--)}n.setState({dealerHand:t,dealerScore:e},(function(){return n.handOver()}))},n.handOver=function(){n.state.playerScore===n.state.dealerScore?n.setState((function(e){return{result:"tied",playerBank:e.playerBank+=e.currentPot/2}})):n.state.playerScore>21?n.setState({result:"dealer",playerBusted:!0}):n.state.dealerScore>21?n.setState((function(e){return{result:"player",dealerBusted:!0,playerBank:e.playerBank+=e.currentPot}})):n.state.playerScore>n.state.dealerScore?n.setState((function(e){return{result:"player",playerBank:e.playerBank+=e.currentPot}})):n.state.playerScore<n.state.dealerScore?n.setState({result:"dealer"}):console.log("Something went wrong"),n.setState({dealerHidden:!1,playerStand:!0,currentPot:0})},n.resetHand=function(){var e=!1;0===n.state.playerBank&&(e=!0),n.setState((function(a){return{playerScore:0,dealerScore:0,currentPot:0,betInputIsValid:n.validateInput(a.betInput),playerHand:["cardBack","cardBack"],dealerHand:[],dealerHandHidden:["cardBack","cardBack"],dealerHidden:!0,currentDeck:Object(p.a)(H),handDealt:!1,playerStand:!1,playerBusted:!1,dealerBusted:!1,result:"",gameOver:e}}))},n.state=q,n}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(h.a,{bg:"dark",variant:"dark",className:"justify-content-center",children:Object(n.jsx)(h.a.Brand,{href:"/",children:Object(n.jsx)("h2",{children:"Let's Play Blackjack!"})})}),Object(n.jsxs)(b.a,{style:{textAlign:"center"},children:[this.state.gameOver?Object(n.jsx)(w,{show:this.state.gameOver,onHide:function(){return e.setState(q)}}):null,Object(n.jsx)(C,{result:this.state.result,playerBusted:this.state.playerBusted,dealerBusted:this.state.dealerBusted}),Object(n.jsx)(D,{dealerHand:this.state.dealerHidden?this.state.dealerHandHidden:this.state.dealerHand,playerHand:this.state.playerHand}),Object(n.jsx)(B,{dealerHidden:this.state.dealerHidden,dealerScore:this.state.dealerScore,playerScore:this.state.playerScore}),Object(n.jsx)(O,{playerBank:this.state.playerBank,currentPot:this.state.currentPot,betInput:this.state.betInput,isValid:this.state.betInputIsValid,handDealt:this.state.handDealt,inputChangedHandler:this.betInputHandler,submitBet:this.submitBetHandler}),Object(n.jsx)(v,{handDealt:this.state.handDealt,currentPot:this.state.currentPot,playerStand:this.state.playerStand,dealerHidden:this.state.dealerHidden,deal:this.dealHand,hit:this.hit,reset:this.resetHand,playDealer:this.playDealerHand})]})]})}}]),t}(s.a.Component);l.a.render(Object(n.jsx)(R,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.6b31c91e.chunk.js.map