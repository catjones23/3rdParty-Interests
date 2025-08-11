// Identifying Third Party Rights
// Catrin Jones
// Last changed 2025-08-06

/* This program determines whether an estate or interest is legal, equitable or statutory */

function main() {
    // Declare all variables to prevent reference errors
    let question1, question2, question3, question5, question6, question7, question8, question9, question10, question11,
        question12, question13, question14, question15, question16, question17, question18, question19, question20, question21,
        question22, question23, question24, question26;

    // Check statutory right:
    question12 = String(prompt('Does the Family Law Act 1996 apply? (yes/no)')).trim().toLowerCase();

    if (question12 === 'yes') {
        question17 = String(
            prompt(
                "No formality required. A statutory right has been established.\n\n" +
                "Has the right been registered as a notice at the Land Registry by date of registration by buyer? (yes/no)"
            )
        ).trim().toLowerCase();
        if (question17 === 'yes') {
            alert('Binds buyer.');
        } else if (question17 === 'no') {
            alert('Does not bind buyer.');
        } else {
            alert("Response not recognised for statutory notice registration.");
        }
        return;
    } else if (question12 === 'no') {
        // First: Identify type of estate or interest
        question1 = String(
            prompt(`Identify the type of estate or interest \n`
                + `(easement/mortgage/restrictive covenant/freehold/leasehold/lease/contract/implied trust/express trust)`)
        ).trim().toLowerCase();

        // Trust logic
        if (question1 === 'implied trust' || question1 === 'express trust' || question1 === 'trust') {
            question20 = String(
                prompt(`A trust interest is not capable of being legal under s 1(2) LPA 1925.\n\n` +
                    `A trust interest is capable of being equitable under s 1(3) LPA 1925.\n\n` +
                    `No formalities are required to create implied trusts (s 53(2) LPA 1925).\n\n` +
                    `Registrable dispositions, IAREs protected by notice and overriding interests under Schedule 3 LRA 2002 will bind a purchaser in registered land (s 29 LRA 2002).\n` +
                    `Although an equitable interest, trust interests cannot be protected by a notice (LRA 2002, s 33).\n` +
                    `They should instead be recorded by a restriction in the proprietorship register of the owner's title (LRA 2002, s 40).\n\n` +
                    `Has this interest been recorded as a restriction at the Land Registry by the date of registration of the buyer? (yes/no)`
                )
            ).trim().toLowerCase();
            if (question20 === 'yes') {
                alert(
                    `This will alert the buyer to the need to overreach.\n\n` +
                    `Interests of beneficiaries under trusts can be overreached if the buyer pays the purchase money to all the trustees being at least two in number (LPA 1925, ss 2 and 27).\n\n` +
                    `If overreaching occurs, the beneficiary's interest will transfer from the property to the proceeds of the sale.\n` +
                    `If the buyer fails to overreach, the restriction will prevent the buyer being registered as the new owner.\n` +
                    `The buyer in this situation would have to get their money back from the seller or try to negotiate with the beneficiary to remove the restriction.\n\n`
                );
            } else if (question20 === 'no') {
                question21 = String(
                    prompt(`Whether or not there is a restriction recorded, the trust interest might be overriding under Sch 3, para 2 of the LRA 2002 and need overreaching if the buyer is to purchase free of the trust interest.\n\n`
                        + `Might the person with the trust interest be in actual occupation immediately before and at the time of completion? (yes/no)`)
                ).trim().toLowerCase();
                if (question21 === 'yes') {
                    question22 = String(
                        prompt(`An interest belonging to a person in actual occupation of the land over which the interest arises will bind the purchaser if in existence at the date of disposition to the purchaser.(Sch 3 para 2 to the LRA 2002)\n\n` +
                        `To qualify, the interest must be proprietary in nature (Strand Securities v Caswell [1965]).\n\n ` +
                        `*The non-owning spouse's or civil partner's right to occupy the matrimonial home under s 30 of the FLA 1996, is incapable of being an overriding interest (personal) and has been specifically excluded under s 31(10)(b) of the FLA 1996.\n\n`
                        + `To assess actual occupation, consider the cases: \n`+
                        `William & Glyn's Bank v Boland [1981]\n` +
                        `Abbey National Building Society v Cann [1991]\n` +
                        `Lloyds Bank plc v Rosset [1989]\n` +
                        `Link Lending Ltd v Bustard [2010]\n` +
                        `Thompson v Foy [2010]\n` +
                        `Kling v Keston Properties Ltd (1983)\n\n` +
                        `To give overriding status, the person must be in actual occupation 'at the time of the disposition' (date of completion).\n\n`
                        + `Is the person in actual occupation? (yes/no)`)
                    ).trim().toLowerCase();
                    if (question22 === 'yes') {
                        question23 = String(
                            prompt(`Further limitations must be considered.\n` +
                                `The interest will only override if:\n\n` +
                                `The occupation (not the interest) would have been obvious on a reasonably careful inspection of the land at the time of the sale; or\n\n` +
                                `The purchaser had actual knowledge of the interest at the time of sale.\n\n` +
                                `If enquiries were made of the person holding interest before the sale, that person must have disclosed it if they could reasonably have been expected to do so.\n` +
                                `See (Thomas v Clydesdale Bank Plc [2010]:\n`+
                                `First requirement --> 'visible signs of occupation which have to be obvious on inspection': no requirement on the person inspecting to have any particular knowledge or make reasonable enquiries.\n` +
                                `Second requirement --> 'actual knowledge' means actual knowledge on the facts which give rise to interest not receipt of formal evidence of it as a legal document.\n\n` +
                                `Are these requirements met? (yes/no)`)
                        ).trim().toLowerCase();
                        if (question23 === 'yes') {
                            alert(
                                `There will be an overriding interest.\n\n` +
                                `However, if the buyer discovers that someone other than the seller has a beneficial interest under a trust in the property protected by Sch 3 para 2...\n\n` +
                                `--> the beneficial interest can always be overreached if the buyer pays the purchase money to all the trustees being at least two in number.\n` +
                                `*Only trust interests can be overreached.\n\n` +
                                `This operates in connection with both registered and unregistered titles.\n\n` +
                                `See case City of London Building Society v Flegg [1988].`
                            );
                        } else if (question23 === 'no') {
                            alert(
                                `There will be no overriding interest.\n\n` +
                                `The buyer will not be bound.`
                            );
                        } else {
                            alert("Response not recognised for overriding interest requirements.");
                        }
                    } else if (question22 === 'no') {
                        alert("There will be no overriding interest.");
                    } else {
                        alert("Response not recognised for actual occupation.");
                    }
                } else if (question21 === 'no') {
                    alert("There will be no overriding interest.");
                } else {
                    alert("Response not recognised for occupation possibility.");
                }
            } else {
                alert("Response not recognised for restriction registration.");
            }
            return;
        }

        // Freehold, leasehold, lease logic
        if (question1 === 'freehold' || question1 === 'leasehold' || question1 === 'lease') {
            question2 = String(
                prompt(
                    `The estate is capable of being legal since ${question1} is listed in s 1(1) of the LPA 1925.\n\n` +
                    `However, in order to determine whether the estate is valid, it's necessary to consider formalities.\n\n` +
                    `Has the estate been created by: deed, contract, signed writing, or no formality?`
                )
            ).trim().toLowerCase();

            // Leasehold/lease logic
            if (question1 === 'leasehold' || question1 === 'lease') {
                if (question2 === 'deed') {
                    question3 = String(
                        prompt(
                            'Generally, to be valid, all legal estates and interests must be created by deed (LPA 1925, s 52).\n\n' +
                        `Requirements for a deed are contained in s 1 of the LP(MP)A 1989. These are:\n\n` +
                        `1. that it is made clear on the face of the document that it is intended to be a deed; and\n` +
                        `2. that it is signed, witnessed and delivered.\n\n` +
                        `If these requirements are met, the leasehold will be a valid legal interest.\n\n` +
                        `Has the deed met these requirements? (yes/no)`
                        )
                    ).trim().toLowerCase();
                    if (question3 === 'yes') {
                        question14 = String(
                            prompt(`Then the "${question1}" is a legal estate. \nIs the legal lease for over 7 years? (yes/no)`)
                        ).trim().toLowerCase();

                        if (question14 === 'yes') {
                            question15 = String(
                                prompt(`Legal leases for over 7 years are listed under s 27 of the LRA 2002 as being a registrable disposition.\n\nHas the interest been registered at the Land Registry by date of registration of buyer? (yes/no)`)
                            ).trim().toLowerCase();

                            if (question15 === 'yes') {
                                alert('The legal lease will be binding on the buyer.');
                            } else if (question15 === 'no') {
                                alert('The lease will not be binding on the buyer.\nNOTE: Possible overlap with Sch 3 para 2 if lease not registered. Is the interest of the person in actual occupation?');
                            } else {
                                alert('Response not recognised for lease registration.');
                            }
                        } else if (question14 === 'no') {
                            question16 = String(
                                prompt(
                                    `The legal lease is less than 7 years and does not need to be registered to bind the buyer.\n\n` +
                                    `A legal lease under 7 years is listed under Sch 3, para 1 of the LRA 2002 as a possible overriding interest. \n` +
                                    `Did the lease exist by date of completion of the sale? (yes/no)`
                                )
                            ).trim().toLowerCase();
                            if (question16 === 'yes') {
                                alert('The legal lease will bind the buyer as an overriding interest.');
                            } else if (question16 === 'no') {
                                alert('The lease will not bind the buyer.');
                            } else {
                                alert('Response not recognised for lease duration.');
                            }
                        } else {
                            alert('Response not recognised for lease term.');
                        }
                    } else if (question3 === 'no') {
                        question5 = String(
                            prompt(
                                `Exceptions to the general rule are found in s 52(2) of the LPA 1925.\n\n` +
                                `s 52(2)(d) states that leases are not required to be made in writing. This is the parol lease exception.\n\n` +
                                `Leases that this applies to are described in s 54(2).\n` +
                                `s 54(2) provides that where a transaction involves the grant of a lease for a term of three years or less, the lease can be granted without a deed and can even be granted orally.\n\n` +
                                `For a lease to be granted without a deed the lease must also:\n\n` +
                                `1. take effect immediately in possession; and\n\n` +
                                `2. the lease must have been granted at the best rent which can be reasonably obtained without taking a fine.\n\n` +
                                `Does the parol lease exception apply? (yes/no)`
                            )
                        ).trim().toLowerCase();

                        if (question5 === 'yes') {
                            alert('A valid lease has been created without a deed.');
                        } else if (question5 === 'no') {
                            alert('The lease is not legal.');
                        } else {
                            alert('Response not recognised for parol lease exception.');
                        }
                    } else {
                        alert('Response not recognised for deed requirements.');
                    }
                } else if (question2 !== 'deed') {
                    question5 = String(
                        prompt(
                            `Exceptions to the general rule are found in s 52(2) of the LPA 1925.\n\n` +
                                `s 52(2)(d) states that leases are not required to be made in writing. This is the parol lease exception.\n\n` +
                                `Leases that this applies to are described in s 54(2).\n` +
                                `s 54(2) provides that where a transaction involves the grant of a lease for a term of three years or less, the lease can be granted without a deed and can even be granted orally.\n\n` +
                                `For a lease to be granted without a deed the lease must also:\n\n` +
                                `1. take effect immediately in possession; and\n\n` +
                                `2. the lease must have been granted at the best rent which can be reasonably obtained without taking a fine.\n\n` +
                                `Does the parol lease exception apply? (yes/no)`
                        )
                    ).trim().toLowerCase();

                    if (question5 === 'yes') {
                        question14 = String(
                            prompt(`Then the "${question1}" is a legal estate. \nIs the legal lease for over 7 years? (yes/no)`)
                        ).trim().toLowerCase();
                        if (question14 === 'yes') {
                            question15 = String(
                                prompt(`Legal leases for over 7 years are listed under s 27 of the LRA 2002 as being a registrable disposition.\n\nHas the interest been registered at the Land Registry by date of registration of buyer? (yes/no)`)
                            ).trim().toLowerCase();

                            if (question15 === 'yes') {
                                alert('The legal lease will be binding on the buyer.');
                            } else if (question15 === 'no') {
                                alert('The lease will not be binding on the buyer.\nNOTE: Possible overlap with Sch 3 para 2 if lease not registered. Is the interest of the person in actual occupation?');
                            } else {
                                alert('Response not recognised for lease registration.');
                            }
                        } else if (question14 === 'no') {
                            question16 = String(
                                prompt(
                                    `The legal lease is less than 7 years and does not need to be registered to bind the buyer.\n\n` +
                                    `A legal lease under 7 years is listed under Sch 3, para 1 of the LRA 2002 as a possible overriding interest. \n` +
                                    `Did the lease exist by date of completion of the sale? (yes/no)`
                                )
                            ).trim().toLowerCase();
                            if (question16 === 'yes') {
                                alert('The legal lease will bind the buyer as an overriding interest.');
                            } else if (question16 === 'no') {
                                alert('The lease will not bind the buyer.');
                            } else {
                                alert('Response not recognised for lease duration.');
                            }
                        } else {
                            alert('Response not recognised for lease term.');
                        }
                    } else if (question2 === 'contract') {
                        question10 = String(prompt(
                            `Formalities for contracts relating to land that are entered into on or after 27 September 1989 are govered by s 2 of the LP(MP)A 1989.\n\n` +
                            `The contract must:\n\n` +
                            `1. Be in writing;\n` +
                            `2. Incorporate all the expressly agreed terms in one document (or where contracts are exchanged, in each document); and\n` +
                            `3. Be signed by or on behalf of all the parties.\n\n` +
                            `*Section 2 does not apply in relation to a contract:\n\n` +
                            `- To grant such a lease created under s 54(2) of the LPA 1925 (short leases);\n` +
                            `- Made in the course of a public auction (s 2(5)(b) of the LP(MP)A 1989).\n\n` +
                            `Have the requirements set out in s 2 LP(MP)A 1989 been met? (yes/no)`
                        )).trim().toLowerCase();

                        if (question10 === 'yes') {
                            question19 = String(
                                prompt(
                                    `The lease cannot be legal but will be equitable (s 1(3) LPA 1925) since it fulfils the formalities under s 2 LP(MP)A 1989 and so will be treated as an estate contract.\n\n` +
                                    `Estate contracts/ equitable leases are interests which affect a registered estate.\n\n` +
                                    `Has the interest been registered as a notice by date of registration of buyer? (yes/no)`
                                )
                            ).trim().toLowerCase();
                            if (question19 === 'yes') {
                                alert('The interest will bind buyer.');
                            } else if (question19 === 'no') {
                                alert(`The interest will not bind buyer. \n`
                                    + `Is the person who holds the interest in occupation?`);
                            } else {
                                alert('Response not recognised for notice registration.');
                            }
                        } else if (question10 === 'no') {
                            alert('The lease is not legally valid nor recognised in equity.');
                        } else {
                            alert('Response not recognised for contract requirements.');
                        }
                    } else {
                        question10 = String(prompt(
                            `Have the requirements set out in s 2 LP(MP)A 1989 been met?\n` +
                            `1. Have the agreed terms been included?\n` +
                            `2. Has the contract been signed in writing? (yes/no)`
                        )).trim().toLowerCase();

                        if (question10 === 'yes') {
                            question19 = String(
                                prompt(
                                    `The lease cannot be legal but will be equitable (s 1(3) LPA 1925) since it fulfils the formalities under s 2 LP(MP)A 1989 and so will be treated as an estate contract.\n\n` +
                                    `Estate contracts/ equitable leases are interests which affect a registered estate.\n\n` +
                                    `Has the interest been registered as a notice by date of registration of buyer? (yes/no)`
                                )
                            ).trim().toLowerCase();
                            if (question19 === 'yes') {
                                alert('The interest will bind buyer.');
                            } else if (question19 === 'no') {
                                alert(`The interest will not bind buyer. \n`
                                    + `Is the person who holds the interest in occupation?`);
                            } else {
                                alert('Response not recognised for notice registration.');
                            }
                        } else if (question10 === 'no') {
                            alert('The lease is not legally valid nor recognised in equity.');
                        } else {
                            alert('Response not recognised for contract requirements.');
                        }
                    }
                }
            }
            // Freehold logic for contract, signed writing, no formality
            else if (question1 === 'freehold') {
                if (question2 === 'contract') {
                    alert(`Where there is a contract to create or convey a legal estate in land, equity will recognise that contract as creating an equitable interest in land.\n\n` +
                        `Provided the contract satisfies the requirements for a contract under s 2 of the LP(MP)A 1989 (so also must include agreed terms as well as signed writing).\n\n` +
                        `This is because where there is a contract that is specifically enforceable at common law, then equity will see done as that which ought to be done.\n\n` +
                        `Rights recognised by equity include a contract to buy a freehold estate in land and an option.`);
                } else if (question2 === 'signed writing') {
                    alert(`Signed writing alone is not sufficient for the freehold to be recognised in equity. Agreed terms must also be included as part of a contract.`);
                } else if (question2 === 'no formality') {
                    alert(`Freeholds are not one of the legal estates valid at law without any formality.\n\n` +
                        `Without a contract that complies with the requirements set out in s 2 LP(MP)A 1989 (agreed terms and signed writing) the freehold estate will also not be recognised in equity.`);
                } else if (question2 === 'deed') {
                    alert(`Generally, to be valid, all legal estates and interests must be created by deed (LPA 1925, s 52).\n\n` +
                        `Requirements for a deed are contained in s 1 of the LP(MP)A 1989. These are:\n\n` +
                        `1. that it is made clear on the face of the document that it is intended to be a deed; and\n` +
                        `2. that it is signed, witnessed and delivered.\n\n` +
                        `If these requirements are met, the freehold will be a valid legal interest.`);
                } else {
                    alert('No valid freehold interest has been created.');
                }
            }
        } else if (question1 === 'easement') {
            question6 = String(prompt(
                `${question1} is listed as one of five third-party interests that are capable of being legal under s 1(2) of the LPA 1925 provided that the easement is for a duration equivalent to one of the two legal estates, i.e. an estate in fee simple absolute in possession (freehold) or for a term of years absolute (leasehold).\n\n` +
                `Will the easement either last forever or does it have a fixed duration? (yes/no)`
            )).trim().toLowerCase();

            if (question6 === 'yes') {
                question7 = String(prompt(`A legal easement must be created by deed (LPA 1925, s 52).\n\n` +
                    `Has there been a deed? (yes/no)`)).trim().toLowerCase();
                if (question7 === 'yes') {
                    question12 = String(
                        prompt(
                            `A valid legal easement has been expressly created by deed.\n\n` +
                            `This is listed under s 27 of the LRA 2002 as a registrable disposition.\n\n` +
                            `Has the legal easement been registered at the Land Registry by date of registration of buyer? (yes/no)`
                        )
                    ).trim().toLowerCase();
                    if (question12 === 'yes') {
                        alert('The easement is legal and binds the buyer.');
                    } else if (question12 === 'no') {
                        alert(`The easement is an equitable interest. If the title is registered, the equitable interest will be an interest affecting a registered estate.\n\n` +
                            `It must therefore be protected by a notice on the register of the servient title before the purchaser is registered as the new owner.`);
                    } else {
                        alert('Response not recognised for easement registration.');
                    }
                } else if (question7 === 'no') {
                    question24 = String(
                        prompt(`A valid legal easement may still arise without the need for a deed or any other formality.\n\n` +
                        `Has the easement been acquired by implied grant or reservation, or acquired by prescription? (yes/no)`)
                    ).trim().toLowerCase();

                    if (question24 === 'yes'){
                        alert(`Easements that are implied into a deed and those that are acquired by prescription (as prescription operates on the basis of a presumed grant in a deed) are, in fact legal easements.\n\n` +
                            `Easements created in this way are protected as an overriding interest under Sch 3, para 3 to the LRA 2002 as long as:\n\n` +
                            `a) The buyer has actual knowledge of the easement on the date of the transfer in their favour; or\n\n` +
                            `b) The existence of the right would have been apparent on a reasonably careful inspection of the land over which the easement is exercisable; or\n\n` +
                            `c) The person with the benefit of the easement can prove that they have exercised the right in the year prior to the sale to the buyer of the servient land.\n\n` +
                            `These conditions have been effective only since 13 October 2006, under the LRA 2002.\n\n` +
                            `*Even if an easement is protected by Sch 3, para 3, the Land Registry now has powers to require disclosure of the easement on a disposition of land so that it may be entered on the register.`);
                    }
                    else if (question24 === 'no'){
                        question26 = String(
                            prompt(`Does the easement satisfy the s 2 LP(MP)A 1989 formalities for contracts relating to the land? (yes/no)`)
                        ).trim().toLowerCase();

                        if (question26 === 'yes'){
                            alert(`The easement is an equitable interest. If the title is registered, the equitable interest will be an interest affecting a registered estate.\n\n` +
                                `It must therefore be protected by a notice on the register of the servient title before the purchaser is registered as the new owner.`);
                        } else if (question26 ==='no'){
                            alert('The interest does not bind the buyer.');
                        } else {
                            alert('Response not recognised for equitable easement contract.');
                        }
                    } else {
                        alert('Response not recognised for implied easement.');
                    }
                } else {
                    alert('Response not recognised for deed for easement.');
                }
            } else if (question6 === 'no') {
                question10 = String(prompt(
                    `This is an easement of uncertain duration.\n\n` +
                     `Has this interest been created in signed writing as per s 53(1) LPA 1925?\n\n` +
                     `(Has it been signed by the person creating it --> the grantor?)(yes/no)`
                )).trim().toLowerCase();

                if (question10 === 'yes') {
                    alert(`The easement is an equitable interest. If the title is registered, the equitable interest will be an interest affecting a registered estate.\n\n` +
                            `It must therefore be protected by a notice on the register of the servient title before the purchaser is registered as the new owner.`);
                } else if (question10 === 'no') {
                    alert('No recognised equitable interest exists.');
                } else {
                    alert('Response not recognised for s53(1) signed writing.');
                }
            } else {
                alert('Response not recognised for easement duration.');
            }
        } else if (question1 === 'mortgage') {
            question8 = String(prompt(
                `This interest is listed under s1(2) LPA 1925 and so may be capable of being legal.\n` +
                `Generally, for a legal interest there must be a deed (s 52 LPA 1925). Has a deed been signed, witnessed and delivered (s 1 LP(MP)A 1989)? (yes/no)`
            )).trim().toLowerCase();

            if (question8 === 'yes') {
                question13 = String(
                    prompt(
                        `The mortgage is a legally valid interest and is listed as a legal charge under s 27 of the LRA 2002 as a registrable disposition.\n` +
                        `Has the mortgage been registered at the Land Registry by date of registration of buyer? (yes/no)`
                    )
                ).trim().toLowerCase();
                if (question13 === 'yes') {
                    alert('The mortgage becomes legal and is binding on the buyer.');
                } else if (question13 === 'no') {
                    alert('The mortgage will not be binding on the buyer.');
                } else {
                    alert('Response not recognised for mortgage registration.');
                }
            } else if (question8 === 'no') {
                alert('The interest is not legally recognised.');
            } else {
                alert('Response not recognised for mortgage deed.');
            }
        } else if (question1 === 'contract') {
            question9 = String(prompt(
                `Have the requirements set out in s 2 LP(MP)A 1989 been met?\n` +
                `1. Have the agreed terms been included?\n` +
                `2. Has the contract been signed in writing? (yes/no)`
            )).trim().toLowerCase();

            if (question9 === 'yes') {
                alert('A contract for sale of a freehold estate or contract for option to buy will be recognised by equity where there is a contract to create or convey a legal estate in land.\n\n' +
                    `In addition, equity will recognise as an estate contract a lease, or an easement which satisfies s 1 of the LPA 1925 but which has not been granted by deed.\n\n` +
                    `Where the instrument creating a lease or an easement satisfies the requirements of s 2 of the LP(MP)A 1989 then these will also be treated as estate contracts.`);
            } else if (question9 === 'no') {
                alert('Interest not recognised in equity.');
            } else {
                alert('Response not recognised for contract formalities.');
            }
        } else if (question1 === 'restrictive covenant') {
            question11 = String(prompt(
                'Has this interest been created in signed writing as per s 53(1) LPA 1925? (yes/no)'
            )).trim().toLowerCase();

            if (question11 === 'yes') {
                question18 = String(
                    prompt(
                        `The restrictive covenant is an equitable interest which affects a registered estate.\n` +
                        `Has the interest been registered at the Land Registry by date of registration of buyer? (yes/no)`
                    )
                ).trim().toLowerCase();
                if (question18 === 'yes') {
                    alert('Interest binds buyer.');
                } else if (question18 === 'no') {
                    alert('Interest will not bind buyer.');
                } else {
                    alert('Response not recognised for restrictive covenant registration.');
                }
            } else if (question11 === 'no') {
                alert('No recognised equitable interest exists.');
            } else {
                alert('Response not recognised for restrictive covenant writing.');
            }
        } else {
            alert('The estate or interest type provided is not recognized.');
        }
    } else {
        alert('Response not recognised for Family Law Act 1996 applicability.');
    }
}

// To run in a browser, call main()
// main();