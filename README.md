# deploy 
ng build --prod --base-href "https://miramardesign.github.io/Oncology-Pipeline/"  && ngh 

# git history issue big files
git rev-list --objects --all | git cat-file --batch-check='%(objecttype) %(objectname) %(objectsize) %(rest)' | sed -n 's/^blob //p' | sort --numeric-sort --key=2 | cut -c 1-12,41- | $(command -v gnumfmt || echo numfmt) --field=2 --to=iec-i --suffix=B --padding=7 --round=nearest

above yielded
d84d438f27e8   43MiB src/assets/videos/dna-damage-response-pathway-sept.mp4
d0eea5667166  102MiB src/assets/videos/met-pathway-alterations-sept.mp4
fda0b2518b81  166MiB src/assets/videos/tgfb-trap-sept.mp4
a1cf58228acf  238MiB src/assets/videos/dna-damage-response-pathway.mp4

git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch src/assets/videos/dna-damage-response-pathway.mp4'

git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch src/assets/videos/tgfb-trap.mp4'

added videos back after


# SeronoPipeline

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
