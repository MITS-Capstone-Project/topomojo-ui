// Copyright 2021 Carnegie Mellon University.
// Released under a 3 Clause BSD-style license. See LICENSE.md in the project root.

import { Injectable } from '@angular/core';
import { ConsoleService } from './console.service';
import { ConsoleSupportsFeatures } from '../console.models';

@Injectable()
export class MockConsoleService implements ConsoleService {
  counter = 0;
  stateChanged!: (state: string) => void;

  constructor() { }

  connect(url: string, stateCallback: (state: string) => void, options: any): void {
    let s = '';
    if (stateCallback === Function) { this.stateChanged = stateCallback; }
    if (this.counter % 3 === 2) {
      s = 'connected';
      // setTimeout(() => {
      //   stateCallback('disconnected');
      // }, 10000);
    }

    if (this.counter % 3 === 1) { s = 'failed'; }
    if (this.counter % 3 === 0) { s = 'forbidden'; }
    this.counter += 1;

    setTimeout(() => {
      stateCallback(s);
    }, 2000);
  }
  disconnect(): void {
    this.stateChanged('disconnected');
  }

  getClipboardHelpMarkdown(): string {
    return "This is a mock console for debugging, so clipboard functionality is disabled.";
  }

  getSupportedFeatures(): ConsoleSupportsFeatures {
    return {
      syncResolution: true,
      virtualKeyboard: true
    }
  }

  sendCAD(): void { }
  refresh(): void { }
  toggleScale(): void { }
  fullscreen(): void { }
  showKeyboard(): void { }
  showExtKeypad(): void { }
  showTrackpad(): void { }
  copy(): void { }
  paste(): void { }
  dispose(): void { }
}
