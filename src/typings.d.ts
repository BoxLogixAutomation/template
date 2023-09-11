// define custom typings here

/**
 * extend NodeJS process with pkg properties
 */
interface PkgExtends {

  /**
   * the packaged executable path
   * 
   * https://github.com/vercel/pkg#snapshot-filesystem
   */
  entrypoint: string;

  /**
   * the packaged default entrypoint path
   * 
   * https://github.com/vercel/pkg#snapshot-filesystem
   */
  defaultEntrypoint: string;
}

declare namespace NodeJS {
  interface Process {
    pkg: PkgExtends;

    send: (message: any, sendHandle?: any, options?: any, callback?: (error: Error | null) => void) => boolean;
  }
}