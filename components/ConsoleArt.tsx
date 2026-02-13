'use client'

import { useEffect } from 'react'

export function ConsoleArt() {
  useEffect(() => {
    console.log(
      `%c




                        -::::
                       :::::
            :::::     ::::
             :::::    ::::     :::::::
              ::::::::::::-  :::::::::
              :::::    :  :::::::  ::
   :::::::::::::::     :   ::::::::
   ::-::::::::: ::    ::  :::::::
     :::   ::::        : ::::::
         ::::::::::    :::: ::::-
              :::::     ::  ::   ::::
               :::: ::: ::  ::         -:::::  : ::
                ::::   :::  ::
                 :::: :- : ::::
                  ::::  ::::::
                   ::::::: :::
                      ::  ::::
                        : ::::
                         :::: ::
                          :::  : :
                           :::   :::
                            ::::  ::
                             :: :  :-:
                              ::  :   :::-
                               ::  ::   ::
                                :::  -::  :
                                  :::   :  :
                                    :::  :
                                      ::    :     ::
                                       -:::       ::
                                          :: :   ::
                                          ::     ::
                                          :::    ::
                                          ::    ::
                                           ::   ::
                                           :    ::
                                           ::: -:::
                                           :   ::  :




  Ni en los Devtools te escapas de la cabra.
  COMPRA YA el libro:
  https://savvily.es/libros/software-cafrers/?utm_source=softwarecafrers
      `,
      'color: #fcc146; font-family: monospace; font-size: 14px;',
    )
  }, [])

  return null
}
