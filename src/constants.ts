export enum Inputs {
    Key = "key",
    Path = "path",
    RestoreKeys = "restore-keys",
    UploadChunkSize = "upload-chunk-size",
    SkipSave = "skip-save",
    SkipRestore = "skip-restore",
    SaveCacheOnAnyFailure = "SAVE_CACHE_ON_ANY_FAILURE",
    StrictRestore = "strict-restore"
}

export enum Outputs {
    CacheHit = "cache-hit"
}

export enum State {
    CachePrimaryKey = "CACHE_KEY",
    CacheMatchedKey = "CACHE_RESULT"
}

export enum Events {
    Key = "GITHUB_EVENT_NAME",
    Push = "push",
    PullRequest = "pull_request"
}

export enum Variables {
    SaveCacheOnAnyFailure = "SAVE_CACHE_ON_ANY_FAILURE"
}

export const RefKey = "GITHUB_REF";
