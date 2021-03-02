# TS KURS ABLAUF, TRAINER #

## M000 | WARMING UP ##

- [ ] Folien: Greeter
- [ ] Link: [Visual Studio Code](https://code.visualstudio.com/)
- [ ] [vsc-shortcuts.md](SHORTCUTS-VSCODE.md)
- [ ] Link: [Git](https://git-scm.com)
- [ ] [git-commands.md](GIT-COMMANDS.md)
- [ ] [textEditorShortcuts.md](SHORTCUTS-EDITOR.md)
- [ ] [commit](https://github.com/ppedvAG/2021-03-01-TS-VC/commit/0f4b6e83278f58501f56b1bfc2136a65caf5fcb4)

---

## M001 | GETTING STARTED ##

- [ ] Folien: TS.pdf > getting started
- [ ] Link: [npm home](https://www.npmjs.com/)
- [ ] tsc, operator '!', type assertion
- [ ] Demo: [hellots.ts](m001\hellots.ts)
- [ ] Übung: [getInput](m001\getInput.ts)
- [ ] [commit](https://github.com/ppedvAG/2021-03-01-TS-VC/commit/f8a38f8c44227598c9e59b0833f98570f5584aee)

<!-- 
- [ ] Demo: wenn gewünscht [js Dom Traversing]()
- [ ] Demo: wenn gewünscht [emmet](typescript/M01-Demo-Helloworld/emmet.html) 
-->

## M002 | TYPES ##

any, unknown, never, void

- [ ] Folien: TS.pdf > primitives
- [ ] Demo: [types](m002\primitives.ts)
- [ ] Übung: [taschenrechner](m002\rechner.ts)
- [ ] Commit: [m002 done](https://github.com/ppedvAG/2021-03-01-TS-VC/commit/f72335a4760408a30b07c41feff9123e4167ba15)

---

## M003 | FUNCTIONS ##

return type, function type, generic function

- [ ] Folien: TS.pdf > functions
- [ ] Demo: [functions.ts](m003\functions.ts)
- [ ] Übung: [node names](m003\giveNodeNames.ts)
- [ ] Commit: [m003 done](https://github.com/ppedvAG/2021-03-01-TS-VC/commit/54fac8bc281a7e7681fad1861fd91863c4063407)

## M004 | DATA STRUCTURES ##

- [ ] Folien: TS.pdf > 
- [ ] [arrays]()
- [ ] [Ü arrays]()
- [ ] [tuple / Tupel]()
- [ ] [commit]()

## M005 | UNION TYPE & LITERAL TYPE ##

- [ ] Demo:
- [ ] [union type & string literal type]()
- [ ] [enums]()
- [ ] [Ü Pizzabestellung]()
- [ ] [commit]()


## M006 | TS CLASSES & INTERFACES

Modul weggelassen

- [x] Folien: TYPESCRIPT.pdf > [interfaces](slides/typescript.md#interfaces)
- [x] Folien: TYPESCRIPT.pdf > [classes](slides/typescript.md#classes)
- [x] Demo: [interfaces](m006/interfaces.ts)
- [x] Demo: [classes](m006/classes.ts)
- [x] Commit: [m006 done](https://github.com/ppedvAG/2021-02-09-TypeScript-N-Angular/commit/a3c2cb1f53341ca6c3ba1bc92e898c4a199ecd69)
- [ ] [Ü Todos]()
- [ ] [commit]()

---

## M007 | TS AMBIENTS (NAMESPASES / MODULES)

*kurz erklärt*

- [ ] Theorie:
- [ ] Demo: [namespaces](m007/namespaces.ts)
- [ ] Commit: [commit]()


---

## M008 | TS DECLARATION FILES ##

*@types/_jsLibrary_*

*kurz erklärt*

- [ ] Link: <https://definitelytyped.org/>
- [ ] Demo: [declare](declarations/declarations.ts)

---

## M009 | JS PROMISE ##

- [ ] Theorie & Demo: [promise](m009\promise.ts)
- [ ] Commit: [m009 done]()
<!-- - [ ] Übung: [fetchAPI](m008/ue-fetchAPI.ts) -->

---

## M010 | JS SERVICE WORKER ##

- [x] Folien: JAVASCRIPT.pdf > Web Worker API
- [ ] Folien: SERVICE-WORKER.pdf
- [x] Demo: [service worker](m020/serviceworker.js)
- [x] Commit: [m020 done](https://github.com/ppedvAG/2021-02-09-TypeScript-N-Angular/commit/109fc9d5329d7bab41d924cb64e979bf33f8cdbf)

---

## MXXX | TS TYPE NARROWING & TYPE GUARDS

- [ ] Theorie:
- [ ] Demo:
- [ ] [commit]()

---

## MXXX | TS DECORATORS

- [ ] Theorie:
- [ ] Demo:
- [ ] [commit]()


---

## M009 | NG GETTING STARTED

- [x] Folien: ANGULAR.pdf > NG & SPA
- [x] Folien: ANGULAR.pdf > GETTING STARTED
- [x] Folien: ANGULAR.pdf > PROJECT STRUCTURE
- [x] Folien: ANGULAR.pdf > ECOSYSTEM
- [x] Folien: ANGULAR.pdf > NG TOOL
- [x] Demo: [grundlegende Begriffe von NG](theory-app/src/app/app/app.component.ts)
- [x] Commit: [m009 done](https://github.com/ppedvAG/2021-02-09-TypeScript-N-Angular/commit/c81e033b00f308315a4427bddf30ef938f0e9dee)

---

## M010 | NG MODULES

- [x] Folien: ANGULAR.pdf > NG MODULES
- [x] Übung: [module einbinden](theory-app/src/app/app/app.component.ts)
- [x] Folien: JAVASCRIPT.pdf > JS MODULES
- [x] Theorie: node modules
- [x] Commit: [m010 done](https://github.com/ppedvAG/2021-02-09-TypeScript-N-Angular/commit/f7c3e5d69b686d5bdcd78369795707cd02a10e86)

---

## M011 | NG COMPONENTS INTRO

- [x] Folien: ANGULAR.pdf > NG COMPONENTS
- [ ] templateUrl VS template ('inline-template')
- [ ] styleUrls VS style ('inline-styles')
- [x] Demo: [ngOnInit()](theory-app/src/app/labs/time/time.component.ts)
- [x] Demo: [@Input()](theory-app/src/app/labs/card/card.component.ts)
- [x] Übung: [rating component](theory-app/src/app/todos/rating/rating.component.ts)
- [x] Commit: [m011 done](https://github.com/ppedvAG/2021-02-09-TypeScript-N-Angular/commit/4c0a3ab24831fc4addf18a9db9dd0223e71184a0)

<!-- LAB1: Durch ein Klick auf einen Button wird die Uhr angehalten -->

<!-- LAB2:
in todos-mdl eine komponente rating
mit zwei Props starsNumber als Input
und starsString

starsString = '*'.repeat(starsNumber);

todos-mdl hat auch eine Overview-Komponente
rating-Komponente wird über Overview gerendert
 -->

---

## M012 | NG COMPONENTS LIFECYCLE

- [ ] Folien: ANGULAR.pdf > NG STATE > LIFECYCLE
- [ ] Demo: [lifecycle hooks](theory-app/src/app/labs/diashow/diashow.component.ts)
- [ ] Commit: [m012 done](https://github.com/ppedvAG/2021-02-09-TypeScript-N-Angular/commit/5a57a522d596c830523892fb3713f9697eb2836e)

---

## M013 | NG & CSS

- [ ] :host
- [ ] style-object: card.component.html
- [ ] class-object: events.component.html
- [ ] ngStyle
- [ ] ngClass: furniture.component.html
- [ ] className
- [ ] commit [m013 done](https://github.com/ppedvAG/2021-02-09-TypeScript-N-Angular/commit/d861de08564cb286391f1d801e7e128ee0138236)

---

## M014 | NG DIRECTIVES

- [x] Folien: ANGULAR.pdf > DIRECTIVES
- [x] Folien: ANGULAR.pdf > TEMPLATES
- [x] ngFor, ngIf, ngSwitch
- [x] class fields / props & template variables
- [x] pipes demo pipes.component.html
- [x] ng-template roman-number.component.html
- [x] Übung: [dice](theory-app/src/app/labs/dice/dice.component.ts)
- [x] Commit: [m014 done](https://github.com/ppedvAG/2021-02-09-TypeScript-N-Angular/commit/6cc8c658688a615f3c6c04d5813ef25d93136398)

<!-- 
LAB1
Komponente dice
eine Zufallszahl von 1 bis 6 wird erzeugt
bei einer 6 wird eine Klasse 'bingo' angewendet
bei einer 1 wird eine Meldung gezeigt: dass der Benutzer weiter versuchen sollte
 -->

<!-- 
LAB
15 Bilder holen
in ein Array diese 15 Bilder packen
Array durchiterieren und dabei soll die 
Komponente Photo wiederholt werden -->

---

## M015 | NG EVENTS

- [x] Folien: ANGULAR.pdf > NG EVENTS
- [x] event binding über runde Klammern
- [x] event object, event.target, event types
- [x] demo events events.component.ts
- [ ] Demo:  [outputs](theory-app/src/app/labs/timer/timer.component.ts)
- [ ] Übung: [rating changed](theory-app/src/app/todos/rating2/rating2.component.ts)
- [ ] Commit:

---

## M016 | NG FORMS

- [x] Folien: ANGULAR.pdf > NG FORMS
- [x] Demo: [forms](theory-app/src/app/labs/forms/forms.component.ts)
- [x] ngModel
- [x] ngForm
- [x] two way data binding [(ngModel)]
- [x] demo ngform ngform.component.ts
- [x] Übung: [pwConfirm](theory-app/src/app/labs/pw-confirm/pw-confirm.component.ts)
- [x] Commit: [m016 done](https://github.com/ppedvAG/2021-02-09-TypeScript-N-Angular/commit/bc7164f45a68059eab8bde47b19813c179b44b05)

---

## M017 | NG SERVICES

- [x] Folien: ANGULAR.pdf > NG SERVICES
- [x] Folien: ANGULAR.pdf > NG HTTPCLIENT
- [x] Folien: ANGULAR.pdf > RXJS
- [x] dependency injection
- [x] service & @Injectable()
- [x] HttpClienModule & HttpClient
- [x] rxjs & observables!!! (ausführlicher gewünscht)
- [x] Demo: [get Todos](theory-app/src/app/todos/todos.service.ts)
- [x] Commit: [m017 done](https://github.com/ppedvAG/2021-02-09-TypeScript-N-Angular/commit/6c1b9fe03b347f3e6718559da3669d38e82ca1eb)

---

## M018 | NG ROUTING

- [x] Folien: ANGULAR.pdf > NG ROUTING
- [x] RoutingModule & RouterModule
- [x] Routes & Route
- [x] Paths, Endpoints, Redirections
- [x] router-outlet & routerLink
- [x] Demo: [routes](theory-app/src/app/app/app-routing.module.ts)
- [x] Commit. [m018 done](https://github.com/ppedvAG/2021-02-09-TypeScript-N-Angular/commit/f5466fd386d03c0fd06fa9a6e5252d95af9c15b5)

---

## M019 | NG MATERIAL

- [x] Folien: ANGULAR.pdf > CSS FRAMEWORKS
- [x] Link: [material.angular.io](https://material.angular.io/)
- [x] Demo: [mat elements](theory-app/src/app/labs/material/material.component.html)
- [x] Commit: [m019 done](https://github.com/ppedvAG/2021-02-09-TypeScript-N-Angular/commit/c46b53a53dd9f9ff225d38777f6f8c3a544af495)

---

<!-- 


 -->
<!-- promise -->
