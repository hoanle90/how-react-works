# hoan
implement react step by step, if you found this useful give a star :D

- reactfiber1.html, reactfiber2.html, reactfiber3.html => Build the jsx to DOM, and simple react fiber, I already comment step by step, what the function is doing

requestanimationframe.html => have 3 samples for callstack, setTimeout and requestanimationframe . So you can see the different and got the idea why react need avoid doing recursive and move to fiber

requestidleCallback.html => have sample only workLoop function and  requestidleCallback . This file only focus on how workLoop work and remaining time

bitwiseSample.js => this file give 2 samples for doing bitwise and non-bitwise, to see how fast bitwise is

the folder react source code => here is react source code, I commend #FiberFlow in the source code of react (react-dom-fiber.js ) , so if anyone want to debug source code just follow the keywork #FiberFlow and we can see how react fiber tree was build step by step.

symbolExample.html => this file give sample why React use Symbol to avoid XSS attack