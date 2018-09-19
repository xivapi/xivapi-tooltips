# XIVAPI Tooltips

> THIS IS A CONCEPT, NO DOCUMENTATION OR SUPPORT.

Don't be afraid, this is not a PHP app. Symfony has a nice package called Encore which does nice webpack stuffs.

## Getting started

The logic for the tooltips is in `/assets/`, you can compile it like so:

- (pre-requisite) `yarn`
- Watch: `bash bin/webpack`
- Compile: `bash bin/webpack_prod`

If you do happen to have PHP (+Composer) installed you can run:

- `composer install`
- `php bin/console server:run` and then you can go to the site listed and view the tooltips

> Note: Only Items and Achievements work right now.
