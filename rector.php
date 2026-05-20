<?php

declare(strict_types=1);

use Rector\Config\RectorConfig;
use Rector\PHPUnit\Set\PHPUnitSetList;
use Rector\Set\ValueObject\LevelSetList;
use Rector\Set\ValueObject\SetList;
use RectorLaravel\Set\LaravelLevelSetList;

return RectorConfig::configure()
    ->withPaths([
        __DIR__.'/app',
        __DIR__.'/bootstrap',
        __DIR__.'/config',
        __DIR__.'/database',
        __DIR__.'/routes',
        __DIR__.'/tests',
    ])
    ->withSkip([
        __DIR__.'/vendor/*',
        __DIR__.'/storage/*',
        __DIR__.'/bootstrap/cache/*',
        __DIR__.'/database/migrations/*',
    ])
    /*
    |--------------------------------------------------------------------------
    | PHP VERSION
    |--------------------------------------------------------------------------
    */

    ->withPhpVersion(80500)
    /*
    |--------------------------------------------------------------------------
    | PREPARED SETS
    |--------------------------------------------------------------------------
    */

    ->withPreparedSets(
        deadCode: true,
        codeQuality: true,
        codingStyle: true,
        privatization: false,
        naming: false,

        instanceOf: true,
        earlyReturn: true,
    )
    /*
    |--------------------------------------------------------------------------
    | MAIN SETS
    |--------------------------------------------------------------------------
    */

    ->withSets([
        /*
        |--------------------------------------------------------------------------
        | PHP
        |--------------------------------------------------------------------------
        */

        LevelSetList::UP_TO_PHP_85,

        SetList::DEAD_CODE,
        SetList::CODE_QUALITY,
        SetList::CODING_STYLE,
        SetList::EARLY_RETURN,

        /*
        |--------------------------------------------------------------------------
        | Laravel
        |--------------------------------------------------------------------------
        */

        LaravelLevelSetList::UP_TO_LARAVEL_130,

        /*
        |--------------------------------------------------------------------------
        | PHPUnit
        |--------------------------------------------------------------------------
        */

        PHPUnitSetList::PHPUNIT_120,
    ])
    /*
    |--------------------------------------------------------------------------
    | IMPORTS
    |--------------------------------------------------------------------------
    */

    ->withImportNames(
        importNames: true,
        importDocBlockNames: true,
        importShortClasses: false,
        removeUnusedImports: true,
    )
    /*
    |--------------------------------------------------------------------------
    | CACHE
    |--------------------------------------------------------------------------
    */

    ->withCache(
        cacheDirectory: __DIR__.'/storage/rector/cache',
    )
    /*
    |--------------------------------------------------------------------------
    | PARALLEL
    |--------------------------------------------------------------------------
    */

    ->withParallel(
        timeoutSeconds: 180,
        maxNumberOfProcess: 8,
        jobSize: 20,
    );
