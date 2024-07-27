import AcceptTOS from "@/app/components/AcceptTOS";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const TOS = async () => {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <div className="p-6 sm:p-12">
      <h1 className=" py-6 text-4xl overflow-y-auto overflow-hidden">
        Terms of Service
      </h1>
      <div className=" h-96 overflow-y-auto">
        <p>{tos}</p>
      </div>
      <AcceptTOS />
    </div>
  );
};

export default TOS;

const tos = `Welcome to Sphere!
Sphere is a technology services provider that offers various software and systems
solutions to helps businesses streamline their payments. The following terms and
conditions of service, together with any other documents expressly incorporated
herein, (collectively, the "Terms") constitute a legal agreement between you, the
entity or sole proprietor on whose behalf a Sphere account is created, (“you",
“your”, “User”, “Merchant”, “Client”, or “Customer”) and Sphere Laboratories, Inc.,
a company incorporated and registered in the United States in the State of
Delaware ("Sphere", "we", “our”, “us”, or “Company”), to receive certain payment
processing, data, technology and analytics, or other business services offered by
Sphere and its Affiliates.
These Terms apply to your use of the Sphere Dashboard (“Dashboard”,
Application”), Application Programming Interface (“API”), Software Development
Kits (“SDKs”), and any Specified Service that may be offered to you by Sphere, its
Affiliates, and/or a Service Provider (collectively, the “Platform”), as a Merchant to
accept fiat payments for goods and services; non-custodially accept digital
assets for goods and services; self-custody digital assets; access reporting, tax,
accounting, and invoicing capabilities; and additional functionality as Sphere may
add to the Platform from time to time (collectively, the “Services”).
These Terms describe the terms that govern your use of all versions of the
Platform. These Terms and additional information about the Platform can be
found on https://spherepay.co (the “Site”).
BY PROCEEDING, YOU UNDERSTAND THAT SPHERE IS NOT A BANK, LICENSED
MONEY TRANSMITTER, BROKER/DEALER, EXCHANGE, CUSTODIAN, OR
FIDUCIARY. IF THESE TYPES OF SERVICES ARE PROVIDED, OUR LICENSED
AFFILIATES WILL PROVIDE ALL APPLICABLE BANK AND/OR MONEY
TRANSMISSION SERVICES AND ARE SOLELY RESPONSIBLE FOR HANDLING
AND KEEPING YOUR FUNDS SAFE. YOU UNDERSTAND THAT SPHERE MAY
PROVIDE YOUR INFORMATION AND INSTRUCTIONS TO A PARTNER FINANCIAL
INSTITUTION OR A THIRD-PARTY SERVICE PROVIDER SOLELY ON A “PASSTHROUGH” BASIS IN ACCORDANCE WITH THESE TERMS OF SERVICE OR ANY
INSTRUCTION YOU PROVIDE. IN SO PROVIDING YOUR INFORMATION OR
INSTRUCTIONS TO A PARTNER FINANCIAL INSTITUTION OR A THIRD-PARTY
SERVICE PROVIDER, SPHERE IS NOT AUTHORIZED TO INITIATE OR EXECUTE 
TRANSACTIONS, PAYMENTS, OR TRANSFERS, AND ONLY THE APPLICABLE
PARTNER FINANCIAL INSTITUTION OR THIRD-PARTY SERVICE PROVIDER IS
AUTHORIZED TO DO SO. SPHERE DOES NOT AND WILL NOT CONTROL,
TRANSMIT OR HOLD YOUR FUNDS PURSUANT TO THESE TERMS OF SERVICE.
IF YOU DO NOT AGREE WITH THESE TERMS, OR IF YOU REJECT ANY PART OF
THEM, YOU MUST IMMEDIATELY CEASE ALL USE OF THIS SITE, APPLICATION,
OR RELATED SERVICES AND EXIT THE PLATFORM. YOUR CONTINUED USE OF
THE SITE, APPLICATION, OR ANY ASSOCIATED SERVICES WILL BE DEEMED AS
YOUR EXPLICIT ACKNOWLEDGMENT AND ACCEPTANCE OF THESE TERMS,
INDICATING YOUR UNDERSTANDING AND AGREEMENT TO COMPLY WITH AND
BE BOUND BY THEM. THIS INCLUDES YOUR EXPRESS WAIVER OF THE RIGHT
TO PARTICIPATE IN A JURY TRIAL IN COURT OR JOIN IN ANY CLASS ACTION
LAWSUIT AGAINST US. YOU AGREE THAT ALL DISPUTES ARISING FROM OR
RELATED TO THESE TERMS OR YOUR USE OF OUR SERVICES MUST BE
RESOLVED EXCLUSIVELY IN A DELAWARE SMALL CLAIMS COURT OR
THROUGH MUTUAL ARBITRATION, AND ANY CLAIMS MUST BE MADE WITHIN`;
